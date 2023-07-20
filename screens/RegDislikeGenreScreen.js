import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, ScrollView, Modal, TouchableOpacity } from 'react-native'
import CheckBox from 'react-native-checkbox'
import Icon from 'react-native-vector-icons/FontAwesome'

const RegDislikeGenreScreen = ({ navigation, route }) => {
      const [selectedGenres, setSelectedGenres] = useState([])
      const { likedGenres, genres } = route.params
      const [modalVisible, setModalVisible] = useState(false)

      const handleGenreToggle = (genre) => {
            const updatedGenres = selectedGenres.includes(genre)
                  ? selectedGenres.filter((item) => item !== genre)
                  : [...selectedGenres, genre]

            setSelectedGenres(updatedGenres)
      }

      const handleNext = () => {
            navigation.navigate('RegRateMovie', { likedGenres: likedGenres, dislikedgenres: selectedGenres })
      }

      const handleBack = () => {
            navigation.goBack()
      }

      const handleConfirm = () => {
            setModalVisible(true)
      }

      const handleCloseModal = () => {
            setModalVisible(false)
      }

      // Filter out the liked genres from the list of genres
      const filteredGenres = genres.filter((genre) => !likedGenres.includes(genre))

      return (
            <View style={styles.scrollContainer}>
                  <View style={styles.heading}>
                        <Icon name="arrow-left" size={30} onPress={handleBack} />
                        <Text style={styles.title}>What do you dislike?</Text>
                  </View>
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
                  <Button title="Next" onPress={handleConfirm} />
                  <Modal visible={modalVisible} animationType="slide" transparent>
                        <View style={styles.modalContainer}>
                              <View style={styles.modalContent}>
                                    <Icon name="arrow-left" size={15} onPress={handleCloseModal} />
                                    <Text style={styles.modalTitle}>Confirm Genres</Text>
                                    <Text style={styles.modalSubtitle}>Liked Genres:</Text>
                                    <Text>{likedGenres.join(', ')}</Text>
                                    <Text style={styles.modalSubtitle}>Disliked Genres:</Text>
                                    <Text>{selectedGenres.join(', ')}</Text>
                                    <Button title="Is this correct?" onPress={handleNext} />
                              </View>
                        </View>
                  </Modal>
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
      modalContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 8,
      },
      modalTitle: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 10,
      },
      modalSubtitle: {
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 10,
      },
})

export default RegDislikeGenreScreen
