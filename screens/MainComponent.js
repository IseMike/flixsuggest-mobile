import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import Constants from 'expo-constants';

const Drawer = createDrawerNavigator();

const screenOptions = {
      headerTintColor: '#fff',
      headerStyle: { backgroundColor: '#0a0908' }
};



const Main = () => {
      return (
            <View
                  style={{
                        flex: 1,
                        paddingTop:
                              Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
                  }}
            >
                  <Drawer.Navigator initialRouteName='Home'>
                        <Drawer.Screen name='Login' component={LoginScreen} />
                        <Drawer.Screen name='Register' component={RegisterScreen} />
                  </Drawer.Navigator>
            </View>
      );
};

export default Main;