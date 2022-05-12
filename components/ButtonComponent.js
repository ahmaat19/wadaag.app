import { View } from 'react-native'
import { Button } from 'react-native-paper'

const ButtonComponent = ({ title = 'Click', onPress }) => {
  return (
    <View
      style={{
        width: '100%',
        marginVertical: 5,
      }}
    >
      <Button
        mode='contained'
        onPress={onPress}
        style={{
          padding: 7,

          borderRadius: 25,
          backgroundColor: '#262525',
        }}
      >
        {title}
      </Button>
    </View>
  )
}

export default ButtonComponent
