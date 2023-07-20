import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'
import CheckBox from 'react-native-checkbox'
import makeAPICall from '../utils/makeAPICall'
import config from '../config'
import Icon from 'react-native-vector-icons/FontAwesome'

const RegLikeGenreScreen = ({ navigation }) => {
      const [selectedGenres, setSelectedGenres] = useState([])
      const [genres, setGenres] = useState([])

      const apiKeyMD = config.apiKeyMD


      const handleGenreToggle = (genre) => {
            const updatedGenres = selectedGenres.includes(genre)
                  ? selectedGenres.filter((item) => item !== genre)
                  : [...selectedGenres, genre]

            setSelectedGenres(updatedGenres)
      }

      const getAllMovieGenres = async () => {
            const url = 'https://moviesdatabase.p.rapidapi.com/titles/utils/genres'
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
                  const genres = results.filter((genre) => genre !== null)
                  console.log('Fetched movie genres:', genres)
                  setGenres(genres)
            } catch (error) {
                  console.error('Error occurred while fetching movie genres:', error)
            }
      }

      const handleNext = () => {
            console.log(selectedGenres)
            if(selectedGenres.length > 0) {
                  navigation.navigate('RegDislikeGenre', { likedGenres: selectedGenres, genres: genres })
            }
            else {
                  alert('Please like at least one Genre.')
            }
      }

      const handleBack = () => {
            navigation.goBack()
      }

      useEffect(() => {
            getAllMovieGenres()
      }, [])

      return (
            <View style={styles.scrollContainer}>
                  <View style={styles.heading}>
                        <Icon name="arrow-left" size={30} onPress={handleBack} />
                        <Text style={styles.title}>What do you like?</Text>
                  </View>
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
            paddingLeft: 10
      },
      scrollContainer: {
            flex: 1,
            padding: 5
      },
})

export default RegLikeGenreScreen