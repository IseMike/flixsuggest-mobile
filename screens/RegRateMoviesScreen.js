import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import MovieList from '../components/MovieList'
import makeAPICall from '../utils/makeAPICall'
import config from '../config'

const Tab = createMaterialTopTabNavigator()

const RegRateMoviesScreen = ({ route }) => {
      const { likedGenres } = route.params || { likedGenres: ['Action', 'Comedy'] } // Default value for likedGenres
      const [moviesByGenre, setMoviesByGenre] = useState({})

      const apiKeyMD = config.apiKeyMD

      const getPopMoviesByGenre = async (genre) => {
            // Using the api get the most popular movies of the liked genre
            const url = `https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&list=most_pop_movies&limit=5`
            const options = {
                  method: 'GET',
                  headers: {
                        'X-RapidAPI-Key': apiKeyMD,
                        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
                  },
            }
            try {
                  const response = await makeAPICall(url, options)
                  const { results } = response
                  return results
            } catch (error) {
                  console.error('Error occurred while fetching movies:', error)
                  return [] // Return an empty array if there's an error
            }
      }

      useEffect(() => {
            const fetchMovies = async () => {
                  const moviesByGenreObject = {}
                  for (const genre of likedGenres) {
                        const movies = await getPopMoviesByGenre(genre)
                        moviesByGenreObject[genre] = movies
                  }
                  setMoviesByGenre(moviesByGenreObject)
            }

            fetchMovies()
      }, [])


      return (
            <View style={{ flex: 1 }}>
                  <View style={styles.heading}>
                        <Text style={styles.title}>What do you think about these?</Text>
                  </View>
                  {Object.keys(moviesByGenre).length > 0 ? (
                        <Tab.Navigator
                              screenOptions={{
                                    scrollEnabled: true,
                                    tabStyle: { width: 'auto' },
                                    indicatorStyle: { backgroundColor: 'red' },
                              }}
                        >
                              {likedGenres.map((genre) => (
                                    <Tab.Screen key={genre} name={genre}>
                                          {() => <MovieList moviesList={moviesByGenre[genre]} />}
                                    </Tab.Screen>
                              ))}
                        </Tab.Navigator>
                  ) : (
                        <Text>Loading...</Text>
                  )}
            </View>
      )
}

const styles = StyleSheet.create({
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
})

export default RegRateMoviesScreen