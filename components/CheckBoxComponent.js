import { View } from 'react-native'
import { RadioButton, Text } from 'react-native-paper'
import { COLORS } from '../constants'

const CheckBoxComponent = ({ value, setValue, label }) => {
  return (
    <View
      style={{
        fontSize: 14,
        marginBottom: 10,
        justifyContent: 'space-between',
      }}
    >
      <RadioButton.Group onValueChange={setValue} value={value}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: COLORS.secondary,
              borderRadius: 25,
              width: '45%',
              padding: 7,
            }}
          >
            <RadioButton
              color={COLORS.primary}
              value={label[0].toLowerCase()}
            />
            <Text style={{ color: COLORS.primary }}>{label[0]}</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: COLORS.secondary,
              borderRadius: 25,
              width: '45%',
              padding: 7,
            }}
          >
            <RadioButton
              color={COLORS.primary}
              value={label[1].toLowerCase()}
            />
            <Text style={{ color: COLORS.primary }}>{label[1]}</Text>
          </View>
        </View>
      </RadioButton.Group>
    </View>
  )
}

export default CheckBoxComponent
