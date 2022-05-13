import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import {
  ButtonComponent,
  CheckBoxComponent,
  InputComponent,
} from '../components'
import { Avatar, Text } from 'react-native-paper'
import { COLORS } from '../constants'
import * as ImagePicker from 'expo-image-picker'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProfileScreen = () => {
  const [type, setType] = useState('rider')
  const [name, setName] = useState('')
  const [image, setImage] = useState(null)
  const [owner, setOwner] = useState('')
  const [license, setLicense] = useState('')
  const [plate, setPlate] = useState('')

  const [hasGalleryPermission, setHasGalleryPermission] = useState(null)

  const onSubmit = () => {
    console.log('submit')
    type === 'rider' && console.log({ type, name, image })
    type === 'driver' &&
      console.log({ name, type, owner, license, plate, image })
  }

  useEffect(() => {
    ;(async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync()
      setHasGalleryPermission(galleryStatus.granted)
    })()
  }, [])

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      aspect: [4, 4],
    })

    if (!result.cancelled) {
      setImage(result.uri)
    }
  }

  if (hasGalleryPermission === false) {
    return <Text>No access to internal storage</Text>
  }

  const riderInfo = {
    riderId: '164',
    level: '3',
  }

  const driverInfo = {
    points: '32',
    level: '19',
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{
          width: '100%',
        }}
      >
        <View
          style={{
            flex: 3,
            backgroundColor: '#4C1655',
            color: COLORS.secondary,
            width: '100%',
            height: 330,
            borderBottomLeftRadius: 150,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <TouchableOpacity
              style={{ borderRadius: 50 }}
              onPress={() => pickImage()}
              rippleColor='rgba(0, 0, 0, .32)'
            >
              <Avatar.Image
                size={130}
                source={
                  image ? { uri: image } : require('../assets/avatar.jpg')
                }
              />
            </TouchableOpacity>

            <Text
              style={{ color: COLORS.secondary, fontSize: 20, marginTop: 10 }}
            >
              {type.toUpperCase()}
            </Text>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginTop: 10,
              }}
            >
              <View style={{ alignItems: 'center' }}>
                <Text style={{ color: COLORS.secondary, fontSize: 14 }}>
                  {type === 'rider' ? 'Rider ID:' : 'Points:'}
                </Text>
                <Text style={{ color: COLORS.secondary, fontSize: 14 }}>
                  {type === 'rider' ? riderInfo.riderId : driverInfo.points}
                </Text>
              </View>
              <View
                style={{
                  width: 1,
                  height: '100%',
                  backgroundColor: COLORS.secondary,
                  marginHorizontal: 10,
                }}
              />
              <View style={{ alignItems: 'center' }}>
                <Text style={{ color: COLORS.secondary, fontSize: 14 }}>
                  {' '}
                  Level:{' '}
                </Text>
                <Text style={{ color: COLORS.secondary, fontSize: 14 }}>
                  {type === 'rider' ? riderInfo.level : driverInfo.level}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 5,
            marginTop: 10,
            paddingHorizontal: 20,
            width: '100%',
          }}
        >
          <CheckBoxComponent
            label={['Rider', 'Driver']}
            value={type}
            setValue={(e) => setType(e)}
          />

          <InputComponent
            placeholder='Enter your name'
            keyboardType='default'
            value={name}
            onChangeText={(e) => setName(e)}
          />

          {type === 'driver' && (
            <>
              <InputComponent
                placeholder='Enter your plate number'
                keyboardType='phone-pad'
                value={plate}
                onChangeText={(e) => setPlate(e)}
              />
              <InputComponent
                placeholder='Enter your license number'
                keyboardType='phone-pad'
                value={license}
                onChangeText={(e) => setLicense(e)}
              />
              <InputComponent
                placeholder='Enter owner name'
                keyboardType='default'
                value={owner}
                onChangeText={(e) => setOwner(e)}
              />
            </>
          )}

          {/* <Button
          icon='camera'
          mode='contained'
          onPress={() => pickImage()}
          style={{ padding: 7, borderRadius: 25, marginVertical: 8 }}
        >
          UPLOAD PHOTO
        </Button> */}

          <ButtonComponent title='Update' onPress={onSubmit} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    color: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
