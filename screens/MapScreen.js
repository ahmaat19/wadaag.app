import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useEffect, useState } from 'react'
import { COLORS } from '../constants'
import { getData } from '../components/Storage'

const MapScreen = () => {
  const [user, setUser] = useState('')

  useEffect(() => {
    getData('user').then((res) => {
      setUser(res)
    })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: COLORS.secondary }}>{user && user.name}</Text>
    </SafeAreaView>
  )
}

export default MapScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    color: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
})
