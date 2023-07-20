import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import MovieCard from '../components/MovieCard'

const MovieList = ({ moviesList }) => {
      console.log(moviesList)
      return (
            <View style={styles.container}>
                  <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                        {moviesList.map((movie) => (
                              <MovieCard key={movie._id} movie={movie} />
                        ))}
                  </ScrollView>
            </View>
      )
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            padding: 10,
      },
      scrollContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
      },
})

export default MovieList