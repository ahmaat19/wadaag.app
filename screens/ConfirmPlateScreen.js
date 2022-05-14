import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../constants'
import { useEffect } from 'react'
import Access from '../utils/Access'

export default function ConfirmPlateScreen() {
  const navigation = useNavigation()
  useEffect(() => {
    !Access() && navigation.navigate('Login')
  }, [navigation])

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ color: COLORS.secondary }}>Confirm Plate Screen</Text>
      </View>
    </SafeAreaView>
  )
}

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
