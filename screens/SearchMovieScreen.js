import React, { useState } from 'react'
import { View, Text } from 'react-native'
import SearchInput from '../components/SearchInput'
import MovieList from '../components/MovieList'

const SearchMovieScreen = () => {
      const [searchResults, setSearchResults] = useState([])

      const handleSearch = (searchResults) => {
            setSearchResults(searchResults)
      }

      return (
            <View style={{ flex: 1 }}>
                  <SearchInput onSearch={handleSearch} />
                  {/* Render MovieList component if search results are available */}
                  {searchResults.length > 0 ? (
                        <MovieList moviesList={searchResults} />
                  ) : (
                        // Display message when there are no search results
                        <Text>No search results yet</Text>
                  )}
            </View>
      )
}

export default SearchMovieScreen
