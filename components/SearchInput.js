import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native'

const SearchBar = () => {
      const [searchText, setSearchText] = useState('')

      const handleSearch = () => {
            // Perform the search action with the searchText
            console.log('Performing search with query:', searchText)
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
