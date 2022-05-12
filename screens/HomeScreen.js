import { COLORS } from '../constants'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import ProfileScreen from './ProfileScreen'
import MapScreen from './MapScreen'

const Tab = createBottomTabNavigator()

const HomeScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Map'}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          let rn = route.name

          if (rn === 'Map') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (rn === 'Profile') {
            iconName = focused ? 'person' : 'person-outline'
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          fontSize: 10,
          height: 50,
        },
      })}
    >
      <Tab.Screen
        options={{ headerShown: false, title: 'Home' }}
        name='Map'
        component={MapScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name='Profile'
        component={ProfileScreen}
      />
    </Tab.Navigator>
  )
}

export default HomeScreen
