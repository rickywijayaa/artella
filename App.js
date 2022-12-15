import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from "react-native";
import IndexHomeScreen from './src/components/screens/IndexHome';
import WelcomeScreen from './src/components/screens/Welcome';
import globalStyles from './src/globalStyles';
import LoginScreen from './src/components/screens/LoginScreen';
import FirstPageRegister from './src/components/screens/FirstPageRegister';
import SecondPageRegister from './src/components/screens/SecondPageRegister';
import ResetPasswordSuccess from './src/components/screens/ResetPasswordSuccess';
import ResetPasswordFailed from './src/components/screens/ResetPasswordFailed';
import ForgotPassword from './src/components/screens/ForgotPassword';

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <SafeAreaView style={globalStyles.droidSafeArea}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }} initialRouteName="Home">
          <Stack.Screen name="BottomTab" component={IndexHomeScreen} />
          <Stack.Screen name="Home" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="FirstPageRegister" component={FirstPageRegister} />
          <Stack.Screen name="SecondPageRegister" component={SecondPageRegister} />
          <Stack.Screen name='ResetPasswordSuccess' component={ResetPasswordSuccess} />
          <Stack.Screen name='ResetPasswordFailed' component={ResetPasswordFailed} />
          <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}