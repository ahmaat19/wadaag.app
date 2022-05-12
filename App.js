import HomeScreen from './screens/HomeScreen'
import OTPScreen from './screens/OPTScreen'
import LoginScreen from './screens/LoginScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen
            name='Login'
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='OTP'
            component={OTPScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}
