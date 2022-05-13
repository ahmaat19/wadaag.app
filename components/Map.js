import { StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps'

const Map = ({ location, currentLocation }) => {
  return (
    <View>
      <MapView
        style={{ height: '100%', width: '100%' }}
        mapType='mutedStandard'
        region={{
          latitude: location.location.lat,
          longitude: location.location.lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        {currentLocation && (
          <MapView.Marker
            coordinate={{
              latitude: currentLocation.location.lat,
              longitude: currentLocation.location.lng,
            }}
            title='Current Location'
            description={currentLocation.description}
          />
        )}
        {location && (
          <MapView.Marker
            coordinate={{
              latitude: location.location.lat,
              longitude: location.location.lng,
            }}
            title='Destination'
            description={location.description}
          />
        )}
      </MapView>
    </View>
  )
}

export default Map

const styles = StyleSheet.create({})
