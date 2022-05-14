import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ConfirmPlateScreen from '../screens/ConfirmPlateScreen'
import HomeButtonTabScreen from '../screens/HomeButtonTabScreen'
import LoginScreen from '../screens/LoginScreen'
import OTPScreen from '../screens/OPTScreen'
import PlateScreen from '../screens/PlateScreen'

export default function StackNavigator() {
  const Stack = createNativeStackNavigator()

  return (
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
        name='HomeButtonTab'
        component={HomeButtonTabScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Plate'
        component={PlateScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='ConfirmPlate'
        component={ConfirmPlateScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}
