import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ButtonComponent, InputComponent, Logo } from '../components'
import { useState, useEffect } from 'react'
import { COLORS } from '../constants'
import { loginWithOTP } from '../data'
import { storeData } from '../components/Storage'
import Access from '../utils/Access'

export default function OTPScreen({ route, navigation }) {
  const [OTP, setOTP] = useState('')

  const onSubmit = async () => {
    if (OTP) {
      const check = loginWithOTP(OTP)

      if (check) {
        await storeData()
        return navigation.navigate('HomeButtonTab')
      }

      return alert('Invalid OTP')
    }
  }

  useEffect(() => {
    Access() && navigation.navigate('HomeButtonTab')
  }, [navigation])

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <InputComponent
        placeholder='Enter OTP Code'
        keyboardType='phone-pad'
        value={OTP}
        onChangeText={(e) => setOTP(e)}
      />
      <ButtonComponent title='Confirm' onPress={onSubmit} />
      <View style={{ position: 'absolute', bottom: 50, left: 20 }}>
        <TouchableOpacity>
          <Text style={{ color: COLORS.secondary }}>Terms of service</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: COLORS.secondary }}>Privacy policy</Text>
        </TouchableOpacity>
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
