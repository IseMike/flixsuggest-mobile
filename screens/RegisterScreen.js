import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const RegisterScreen = ({ navigation }) => {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');

      const handleRegister = () => {
            // Perform register logic here
            console.log('Username:', username);
            console.log('Password:', password);
            navigation.navigate('Login');
      };

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
                  <Button title="Register" onPress={handleRegister} />
            </View>
      );
};

export default RegisterScreen;