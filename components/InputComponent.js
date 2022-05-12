import { View } from 'react-native'

import { TextInput } from 'react-native-paper'

const InputComponent = ({
  onChangeText,
  value,
  placeholder = 'Enter',
  keyboardType,
}) => {
  return (
    <View
      style={{
        width: '100%',
        marginBottom: 10,
      }}
    >
      <TextInput
        mode='outlined'
        theme={{ roundness: 25, colors: { text: '#5C1A67' } }}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder={placeholder}
        style={{
          maxHeight: 60,
          display: 'flex',
          justifyContent: 'center',
          shadowColor: 'none',
        }}
      />
    </View>
  )
}

export default InputComponent
