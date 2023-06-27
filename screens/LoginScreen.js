import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');

      const handleLogin = () => {
            // Perform login logic here
            console.log('Username:', username);
            console.log('Password:', password);
      };

      const handleRegister = () => {
            // Navigate to RegisterScreen
            navigation.navigate('Register');
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
                  <Button title="Login" onPress={handleLogin} />
                  <Button title="Register" onPress={handleRegister} />
            </View>
      );
};

export default LoginScreen;