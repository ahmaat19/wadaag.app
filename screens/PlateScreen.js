import { useNavigation } from '@react-navigation/native'
import { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ButtonComponent, InputComponent } from '../components'
import { COLORS } from '../constants'

import Access from '../utils/Access'

export default function PlateScreen() {
  const [plate, setPlate] = useState('')

  const navigation = useNavigation()

  const onSubmit = () => {
    if (plate) return navigation.navigate('ConfirmPlate')

    alert('Plate number is required')
  }

  useEffect(() => {
    !Access() && navigation.navigate('Login')
  }, [navigation])

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ color: COLORS.secondary }}>
          Please enter the plate number of your driver
        </Text>
      </View>
      <InputComponent
        placeholder='Enter your plate number'
        keyboardType='phone-pad'
        value={plate}
        onChangeText={(e) => setPlate(e)}
      />
      <ButtonComponent title='Next' onPress={onSubmit} />
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
