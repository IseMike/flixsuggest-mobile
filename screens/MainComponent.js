import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import RegLikeGenreScreen from './RegLikeGenreScreen';
import RegDislikeGenreScreen from './RegDislikeGenreScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import Constants from 'expo-constants';

const Drawer = createDrawerNavigator();
const RegistrationStack = createStackNavigator();

const RegistrationStackScreen = () => (
      <RegistrationStack.Navigator initialRouteName="RegisterScreen" screenOptions={{ headerShown: false }}>
            <RegistrationStack.Screen name="RegisterScreen" component={RegisterScreen} />
            <RegistrationStack.Screen name="RegLikeGenre" component={RegLikeGenreScreen} />
            <RegistrationStack.Screen name="RegDislikeGenre" component={RegDislikeGenreScreen} />
      </RegistrationStack.Navigator>
);


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
                        <Drawer.Screen name='Register' component={RegistrationStackScreen} />
                  </Drawer.Navigator>
            </View>
      );
};

export default Main;