import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CheckBox from 'react-native-checkbox';
import makeAPICall from '../utils/makeAPICall';
import { apiKey } from '../config';

const RegisterGenreScreen = ({ navigation }) => {
      const [selectedGenres, setSelectedGenres] = useState([]);
      const [genres, setGenres] = useState([]);

      //const apiUrl = 'http://www.omdbapi.com/';
      //const endpoint = '/movies';
      //const url = `${apiUrl}?apikey=${apiKey}&${endpoint}`;

      const handleGenreToggle = (genre) => {
            const updatedGenres = selectedGenres.includes(genre)
                  ? selectedGenres.filter((item) => item !== genre)
                  : [...selectedGenres, genre];

            setSelectedGenres(updatedGenres);
      };

      const getAllMovieGenres = async () => {
            try {
                  const data = await makeAPICall(url);
                  console.log('Fetched movie data:', data);
                  const genresSet = new Set();

                  data.forEach((movie) => {
                        const movieGenres = movie.Genre.split(',').map((genre) => genre.trim());
                        movieGenres.forEach((genre) => genresSet.add(genre));
                  });

                  setGenres(Array.from(genresSet));
            } catch (error) {
                  console.error('Error occurred while fetching movie genres:', error);
            }
      };


      const handleNext = () => {
            console.log(selectedGenres);
      };

      useEffect(() => {
            getAllMovieGenres();
      }, []);

      return (
            <View>
                  <Text style={styles.heading}>What do you like?</Text>
                  {genres.map((genre) => (
                        <View key={genre}>
                              <CheckBox
                                    label={genre}
                                    checked={selectedGenres.includes(genre)}
                                    onChange={() => handleGenreToggle(genre)}
                              />
                        </View>
                  ))}
                  <Button title="Next" onPress={handleNext} />
            </View>
      );
};

const styles = StyleSheet.create({
      heading: {
            fontSize: 24,
            fontWeight: 'bold',
      },
});

export default RegisterGenreScreen;