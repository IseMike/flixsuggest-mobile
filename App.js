import Main from './screens/MainComponent';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

export default function App() {
      return (
            <NavigationContainer>
                  <Main />
                  <Toast />
            </NavigationContainer>
      );
}