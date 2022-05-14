import { StyleSheet, View } from 'react-native'
import { useEffect, useState, useRef } from 'react'
import { COLORS } from '../constants'
import { getData, removeData } from '../components/Storage'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { ButtonComponent, DirectionInfo, Map } from '../components'
import * as Location from 'expo-location'
import { useNavigation } from '@react-navigation/native'
import Access from '../utils/Access'

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

  const navigation = useNavigation()

  useEffect(() => {
    !Access() && navigation.navigate('Login')
  }, [navigation])

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

  const onSubmit = () => {
    if (location.description === 'Temporary location')
      return alert('Please select your destination location')

    navigation.navigate('Plate')

    // removeData()
    // navigation.navigate('Login')
  }

  const inputRef = useRef()
  const clearInput = () => {
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
          <DirectionInfo
            clearInput={clearInput}
            inputRef={inputRef}
            location={location}
            setLocation={setLocation}
            GOOGLE_MAPS_APIKEY={GOOGLE_MAPS_APIKEY}
            currentLocation={currentLocation}
          />

          <View style={{ marginTop: -10 }}>
            <ButtonComponent
              title='Next'
              onPress={onSubmit}
              disabled={
                location.description !== 'Temporary location' ? false : true
              }
            />
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
    position: 'relative',
  },
})
