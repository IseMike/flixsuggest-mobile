import makeAPICall from '../utils/makeAPICall';
import config from '../config';
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';
import MovieCard from '../components/MovieCard';



const RegRateMoviesScreen = ({ navigation, route }) => {

      const apiKeyMD = config.apiKeyMD;
      //const { likedGenres, dislikedGenres } = route.params;
      const [moviesList, setMoviesList] = useState([]);


      const getPopMoviesByGenre = async (genre) => {
            const url = `https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&list=top_rated_english_250&limit=5`;
            const options = {
                  method: 'GET',
                  headers: {
                        'X-RapidAPI-Key': apiKeyMD,
                        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                  }
            }
            try {
                  const response = await makeAPICall(url, options);
                  const { results } = response;
                  setMoviesList(results)
                  console.log('Fetched movies:', results);
                  results.map((movie) => (console.log(movie)))
            } catch (error) {
                  console.error('Error occurred while fetching movies:', error);
            }
      }


      useEffect(() => {
            getPopMoviesByGenre('Drama');
      }, []);

      return (
            <View style={styles.container}>
                  <View style={styles.heading}>
                        <Text style={styles.title}>What do you think about these?</Text>
                  </View>
                  <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                        {moviesList.map((movie) => (
                              <MovieCard key={movie._id} movie={movie} />
                        ))}
                  </ScrollView>
            </View>
      );
};

const styles = StyleSheet.create({
      container: {
            flex: 1,
            padding: 10,
      },
      heading: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
      },
      title: {
            fontSize: 24,
            fontWeight: 'bold',
            paddingBottom: 10,
            paddingLeft: 10,
      },
      scrollContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
      },
});

export default RegRateMoviesScreen;