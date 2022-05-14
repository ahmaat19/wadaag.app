import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import StackNavigator from './utils/StackNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StackNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  )
}
