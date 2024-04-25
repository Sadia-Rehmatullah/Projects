import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import DisplayAnImageWithStyle from './Screens/Welcome';
import LoginScreen from './Screens/Signin';
import SignupButton from './Screens/Signup';
import MyTabs from './Screens/Tabs';


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <DisplayAnImageWithStyle/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Welcome" component={DisplayAnImageWithStyle} />
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Signup" component={SignupButton}/>
        <Stack.Screen name="Home" options={{headerShown:false}} component={MyTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#1D1160',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
