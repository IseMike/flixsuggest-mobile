import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import RegisterGenreScreen from './RegisterGenreScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import Constants from 'expo-constants';

const Drawer = createDrawerNavigator();


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
                        <Drawer.Screen name='RegisterGenre' component={RegisterGenreScreen}
                              options={{ title: 'Help Us Help You', drawerLabel: () => null }} />
                  </Drawer.Navigator>
            </View>
      );
};

export default Main;