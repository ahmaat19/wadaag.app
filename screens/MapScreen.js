import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useEffect, useState, useRef } from 'react'
import { COLORS } from '../constants'
import { getData } from '../components/Storage'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { ButtonComponent, Map } from '../components'
import { Ionicons } from '@expo/vector-icons'
import * as Location from 'expo-location'

const MapScreen = () => {
  const [user, setUser] = useState('')
  const [location, setLocation] = useState({
    location: {
      lat: 2.0469343,
      lng: 45.3181623,
    },
    description: 'Temporary location',
  })

  const [currentLocation, setCurrentLocation] = useState({
    location: {
      lat: 2.0372165,
      lng: 45.3121862,
    },
    description: 'Location Permission Not Granted',
  })

  useEffect(() => {
    getData('user').then((res) => {
      setUser(res)
    })
  }, [])

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        alert('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setCurrentLocation({
        location: {
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        },
        description: 'Your location',
      })
    })()
  }, [])

  const onSubmit = () => {}

  const inputRef = useRef()
  const clearInput = () => {
    // inputRef.current.value = ''
    // inputRef.current.refs.textInput = ''
    inputRef.current.clear()
    setLocation({
      location: {
        lat: 2.0469343,
        lng: 45.3181623,
      },
      description: 'Temporary location',
    })
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 3, width: '100%' }}>
        <Map location={location} currentLocation={currentLocation} />
      </View>
      <View style={{ flex: 1, width: '100%', marginTop: 10 }}>
        <View
          style={{
            position: 'absolute',
            backgroundColor: COLORS.primary,
            width: '100%',
            height: '100%',
            borderTopEndRadius: 25,
            borderTopStartRadius: 25,
            zIndex: 1,
            marginTop: -30,
            paddingTop: 20,

            paddingHorizontal: 20,
          }}
        >
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
              <Ionicons
                name='radio-button-on'
                size={24}
                color={COLORS.secondary}
              />
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
              <Text style={{ color: COLORS.secondary, fontSize: 10 }}>
                PICKUP
              </Text>
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

          <View style={{ marginTop: -10 }}>
            <ButtonComponent title='Next' onPress={onSubmit} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: COLORS.primary,
    color: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 20,
    position: 'relative',
  },
})
