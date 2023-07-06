import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import CheckBox from 'react-native-checkbox';
import makeAPICall from '../utils/makeAPICall';
import config from '../config';

const RegLikeGenreScreen = ({ navigation }) => {
      const [selectedGenres, setSelectedGenres] = useState([]);
      const [genres, setGenres] = useState([]);

      const apiKeyMD = config.apiKeyMD

      //const apiUrl = 'http://www.omdbapi.com/';
      //const endpoint = 'titles/utils/genres';
      //const apiUrl = `https://moviesdatabase.p.rapidapi.com/`
      //const url = `${apiUrl}?apikey=${apiKeyMD}&${endpoint}`;


      const handleGenreToggle = (genre) => {
            const updatedGenres = selectedGenres.includes(genre)
                  ? selectedGenres.filter((item) => item !== genre)
                  : [...selectedGenres, genre];

            setSelectedGenres(updatedGenres);
      };

      const getAllMovieGenres = async () => {
            const url = 'https://moviesdatabase.p.rapidapi.com/titles/utils/genres';
            const options = {
                  method: 'GET',
                  headers: {
                        'X-RapidAPI-Key': apiKeyMD,
                        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
                  },
            };
            try {
                  const response = await makeAPICall(url, options);
                  const { results } = response;
                  const genres = results.filter((genre) => genre !== null);
                  console.log('Fetched movie genres:', genres);
                  setGenres(genres);
            } catch (error) {
                  console.error('Error occurred while fetching movie genres:', error);
            }
      };

      const handleNext = () => {
            console.log(selectedGenres);
            navigation.navigate('RegDislikeGenre', { likedGenres: selectedGenres, genres: genres });
      };

      useEffect(() => {
            getAllMovieGenres();
      }, []);

      return (
            <View style={styles.scrollContainer}>
                  <Text style={styles.heading}>What do you like?</Text>
                  <ScrollView >
                        {genres.map((genre) => (
                              <View key={genre}>
                                    <CheckBox
                                          label={genre}
                                          checked={selectedGenres.includes(genre)}
                                          onChange={() => handleGenreToggle(genre)}
                                    />
                              </View>
                        ))}
                  </ScrollView>
                  <Button title="Next" onPress={handleNext} />
            </View>
      );
};

const styles = StyleSheet.create({
      heading: {
            fontSize: 24,
            fontWeight: 'bold',
            paddingBottom: 10,
      },
      scrollContainer: {
            flex: 1,
            padding: 5
      },
});

export default RegLikeGenreScreen;