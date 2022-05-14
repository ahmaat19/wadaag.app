import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ButtonComponent, InputComponent, Logo } from '../components'
import { COLORS } from '../constants'
import Access from '../utils/Access'

export default function LoginScreen() {
  const [mobile, setMobile] = useState('')

  const navigation = useNavigation()

  const onSubmit = () => {
    if (mobile) return navigation.navigate('OTP', { mobile })

    alert('mobile number is required')
  }

  useEffect(() => {
    Access() && navigation.navigate('HomeButtonTab')
  }, [navigation])

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <InputComponent
        placeholder='Enter your mobile number'
        keyboardType='phone-pad'
        value={mobile}
        onChangeText={(e) => setMobile(e)}
      />
      <ButtonComponent title='Login' onPress={onSubmit} />
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
