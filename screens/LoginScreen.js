import React, { useState } from 'react'
import { View, TextInput, Button, TouchableOpacity, Text } from 'react-native'
import { Linking } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginScreen = ({ navigation }) => {
      const [username, setUsername] = useState('')
      const [password, setPassword] = useState('')

      const handleLogin = () => {
            // Perform login logic here
            console.log('Login Username:', username)
            console.log('Login Password:', password)
      }

      const handleRegister = () => {
            // Navigate to RegisterScreen
            navigation.navigate('Register')
      }

      const handleMDbLinkPress = () => {
            // Open link to the api website
            Linking.openURL('https://rapidapi.com/SAdrian/api/moviesdatabase/details')
      }

      const removeLocalData = async () => {
            try {
                  // Clear all local data
                  await AsyncStorage.clear()
                  console.log('Local data removed successfully')
            } catch (error) {
                  console.error('Error removing local data:', error)
            }
      }

      return (
            <View>
                  <TextInput
                        placeholder="Username"
                        value={username}
                        onChangeText={setUsername}
                  />
                  <TextInput
                        placeholder="Password"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                  />
                  <Button title="Login" onPress={handleLogin} />
                  <Button title="Register" onPress={handleRegister} />

                  {/*This is a development button that will remove the local data in the async storage.*/}
                  <Button title="Remove Local Data" onPress={removeLocalData} />


                  <Text style={{ alignSelf: 'center', marginTop: 16, color: 'black' }}>
                        Created by Isaac Shepherd
                  </Text>
                  <TouchableOpacity onPress={handleMDbLinkPress}>
                        <Text style={{ alignSelf: 'center', marginTop: 16, color: 'blue' }}>
                              Powered by MoviesDatabase
                        </Text>
                  </TouchableOpacity>
            </View>
      )
}

export default LoginScreen