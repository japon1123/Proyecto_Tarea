import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/views/Login/Login';
import Crod from './src/views/Crod/Crod';

const Stack = createStackNavigator();// gestiona la navegacion entre pantallas

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Logeo" component={Login} />
        <Stack.Screen name="Crud" component={Crod} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;