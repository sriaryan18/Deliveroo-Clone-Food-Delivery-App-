import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import Homescreen from './screens/Homescreen';
import Restaurants from './screens/Restaurants';
import { Provider } from 'react-redux'
import storeBasket from './store';
import Basket from './screens/Basket';
import PreparingScreen from './screens/PreparingScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={storeBasket}>
      <SafeAreaProvider>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Homescreen}/>
            <Stack.Screen name='Restaurant' component={Restaurants}/>
            <Stack.Screen name="Basket" component={Basket} options={{presentation:'modal', headerShown:false, animation:'slide_from_bottom'}}/>
            <Stack.Screen name="Preparation Screen" component={PreparingScreen}
              options={{headerShown:false, animation:'slide_from_bottom', presentation:'fullScreenModal'}}
            />
        </Stack.Navigator>
       </SafeAreaProvider>
       </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
