import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import CheckBox from 'react-native-checkbox';

const RegDislikeGenreScreen = ({ navigation, route }) => {
      const [selectedGenres, setSelectedGenres] = useState([]);
      const { likedGenres, genres } = route.params;

      const handleGenreToggle = (genre) => {
            const updatedGenres = selectedGenres.includes(genre)
                  ? selectedGenres.filter((item) => item !== genre)
                  : [...selectedGenres, genre];

            setSelectedGenres(updatedGenres);
      };

      const handleNext = () => {
            // Perform the necessary action with the selected disliked genres
            console.log('Disliked Genres:', selectedGenres);
      };

      // Filter out the liked genres from the list of genres
      const filteredGenres = genres.filter((genre) => !likedGenres.includes(genre));

      return (
            <View style={styles.scrollContainer}>
                  <Text style={styles.heading}>What do you dislike?</Text>
                  <ScrollView >
                        {filteredGenres.map((genre) => (
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

export default RegDislikeGenreScreen;
