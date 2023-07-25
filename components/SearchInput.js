import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native'
import config from '../config'
import makeAPICall from '../utils/makeAPICall'

const SearchBar = ({ onSearch }) => {
      const [searchText, setSearchText] = useState('')
      const apiKeyMD = config.apiKeyMD

      const handleSearch = async () => {
            if (searchText.trim() === '') {
                  Alert.alert('Error', 'Please enter a search term.')
                  return
            }

            const encodedSearchTerm = encodeURIComponent(searchText)

            const url = `https://moviesdatabase.p.rapidapi.com/titles/search/title/${encodedSearchTerm}?exact=false&sort=year.incr&endYear=2022&titleType=movie`
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
                  // Call the onSearch callback with the searchText
                  onSearch(results)
            } catch (error) {
                  console.error('Error occurred while fetching movies:', error)
            }


            // Clear the input after searching
            setSearchText('')
      }

      return (
            <View style={styles.container}>
                  <TextInput
                        style={styles.input}
                        placeholder="Enter your search query"
                        value={searchText}
                        onChangeText={setSearchText}
                  />
                  <TouchableOpacity style={styles.button} onPress={handleSearch}>
                        <Text style={styles.buttonText}>Search</Text>
                  </TouchableOpacity>
            </View>
      )
}

const styles = StyleSheet.create({
      container: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            borderRadius: 8,
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: '#ccc',
      },
      input: {
            flex: 1,
            height: 40,
            marginRight: 10,
      },
      button: {
            padding: 10,
            backgroundColor: '#2196F3',
            borderRadius: 8,
      },
      buttonText: {
            color: '#fff',
            fontWeight: 'bold',
      },
})

export default SearchBar
