import { View, Image } from 'react-native'

const Logo = () => {
  return (
    <View
      style={{
        marginBottom: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        source={require('../assets/wadaag-icon.png')}
        style={{
          width: 130,
          height: 130,
        }}
      />
    </View>
  )
}

export default Logo
