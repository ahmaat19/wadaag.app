import ButtonTabNavigator from '../utils/ButtonTabNavigator'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Access from '../utils/Access'

const HomeButtonTabScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    !Access() && navigation.navigate('Login')
  }, [navigation])

  return <ButtonTabNavigator />
}

export default HomeButtonTabScreen
