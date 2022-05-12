import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async () => {
  try {
    await AsyncStorage.setItem(
      'otp',
      JSON.stringify({ name: 'Ahmed', auth: true })
    )
  } catch (e) {
    alert(e)
  }
}

export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('otp')
    if (value !== null) {
      return JSON.parse(value)
    }
  } catch (e) {
    alert(e)
  }
}

export const removeData = async () => {
  try {
    await AsyncStorage.removeItem('otp')
  } catch (e) {
    alert(e)
  }
}
