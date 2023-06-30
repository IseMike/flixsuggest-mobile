import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CheckBox from 'react-native-checkbox';

const RegisterGenreScreen = ({ navigation }) => {
      const [selectedGenres, setSelectedGenres] = useState([]);

      const handleGenreToggle = (genre) => {
            const updatedGenres = selectedGenres.includes(genre)
                  ? selectedGenres.filter((item) => item !== genre)
                  : [...selectedGenres, genre];

            setSelectedGenres(updatedGenres);
      };

      const handleNext = () => {
            console.log(selectedGenres)
      }

      return (
            <View>
                  <Text style={styles.heading}>What do you like?</Text>
                  <View>
                        <CheckBox
                              label="Action"
                              checked={selectedGenres.includes('Action')}
                              onChange={() => handleGenreToggle('Action')}
                        />
                  </View>
                  <View>
                        <CheckBox
                              label="Adventure"
                              checked={selectedGenres.includes('Adventure')}
                              onChange={() => handleGenreToggle('Adventure')}
                        />
                  </View>
                  <View>
                        <CheckBox
                              label="Animation"
                              checked={selectedGenres.includes('Animation')}
                              onChange={() => handleGenreToggle('Animation')}
                        />
                  </View>
                  <View>
                        <CheckBox
                              label="Comedy"
                              checked={selectedGenres.includes('Comedy')}
                              onChange={() => handleGenreToggle('Comedy')}
                        />
                  </View>
                  <View>
                        <CheckBox
                              label="Crime"
                              checked={selectedGenres.includes('Crime')}
                              onChange={() => handleGenreToggle('Crime')}
                        />
                  </View>
                  <View>
                        <CheckBox
                              label="Drama"
                              checked={selectedGenres.includes('Drama')}
                              onChange={() => handleGenreToggle('Drama')}
                        />
                  </View>
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