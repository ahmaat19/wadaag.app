import { Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../constants'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

const DirectionInfo = ({
  clearInput,
  inputRef,
  setLocation,
  location,
  currentLocation,
  GOOGLE_MAPS_APIKEY,
}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <View
        style={{
          width: '20%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginBottom: 20,
          paddingStart: 15,
        }}
      >
        <Ionicons name='radio-button-on' size={24} color={COLORS.secondary} />
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <View
            key={item}
            style={{
              width: 1,
              height: '5%',
              backgroundColor: COLORS.secondary,
              marginLeft: 10,
              marginRight: 10,
            }}
          />
        ))}
        <Ionicons name='pin' size={24} color='red' />
      </View>
      <View style={{ width: '80%' }}>
        <Text style={{ color: COLORS.secondary, fontSize: 10 }}>PICKUP</Text>
        <Text style={{ color: COLORS.secondary, fontWeight: 'bold' }}>
          {currentLocation.description}
        </Text>

        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: COLORS.secondary,
            marginVertical: 15,
          }}
        />
        <Text
          style={{
            color: COLORS.secondary,
            fontSize: 10,
            marginBottom: -10,
          }}
        >
          DESTINATION
        </Text>

        <View
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={{ width: '70%' }}>
            <GooglePlacesAutocomplete
              ref={inputRef}
              styles={{
                container: {
                  flex: 0,
                  marginStart: -10,
                },
                textInputContainer: {
                  width: '100%',
                },
                textInput: {
                  backgroundColor: 'transparent',
                  borderRadius: 25,
                  color: COLORS.secondary,
                  fontWeight: 'bold',
                },
              }}
              query={{
                key: GOOGLE_MAPS_APIKEY,
                language: 'en',
              }}
              onPress={(data, details = null) => {
                setLocation({
                  location: details.geometry.location,
                  description: data.description,
                })
              }}
              fetchDetails={true}
              returnKeyType='search'
              enablePoweredByContainer={false}
              minLength={2}
              placeholder='Where To?'
              nearbyPlacesAPI='GooglePlacesSearch'
              debounce={400}
            />
          </View>

          {location.description !== 'Temporary location' && (
            <TouchableOpacity onPress={() => clearInput()}>
              <Ionicons name='close' size={24} color='red' />
            </TouchableOpacity>
          )}
          <View
            style={{
              width: 1,
              height: '40%',
              backgroundColor: COLORS.secondary,
              marginVertical: 15,
            }}
          />
          <Ionicons name='map' size={24} color={COLORS.secondary} />
        </View>
      </View>
    </View>
  )
}

export default DirectionInfo
