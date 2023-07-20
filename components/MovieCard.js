import React, { useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import StarRating from 'react-native-star-rating'

const MovieCard = ({ movie }) => {
      const [rating, setRating] = useState(0)

      const handleRatingChange = (newRating) => {
            setRating(newRating)
      }

      return (
            <View style={styles.card}>
                  <View style={styles.imageContainer}>
                        <Image
                              source={{ uri: movie.primaryImage.url }}
                              style={styles.image}
                              resizeMode="cover"
                        />
                  </View>
                  <View style={styles.details}>
                        <Text style={styles.title}>{movie.titleText.text}</Text>
                        <Text style={styles.releaseYear}>{movie.releaseYear.year}</Text>
                        <StarRating
                              disabled={false}
                              maxStars={5}
                              rating={rating}
                              selectedStar={handleRatingChange}
                              starSize={20}
                              fullStarColor="#FFD700"
                        />
                  </View>
            </View>
      )
}

const styles = StyleSheet.create({
      card: {
            width: '95%',
            height: 400,
            borderRadius: 8,
            backgroundColor: '#fff',
            margin: 10,
            elevation: 2,
            flexDirection: 'row',
            overflow: 'hidden', // Clip content outside the card
            alignItems: 'center',
            justifyContent: 'center',
      },
      imageContainer: {
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            overflow: 'hidden', // Clip content outside the container
            width: '60%',
      },
      image: {
            width: '100%',
            height: '85%',
      },
      details: {
            flex: 1,
            padding: 10,
      },
      title: {
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 5,
      },
      releaseYear: {
            fontSize: 14,
            color: '#888',
      },
})

export default MovieCard