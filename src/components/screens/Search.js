import React, { useState } from 'react'
import { View, Text, ScrollView, StatusBar, Dimensions, Image } from 'react-native'
import SearchBox from '../screenComponents/SearchBox'
import SearchContent from '../screenComponents/SearchContent'

const Search = () => {
    const [image, setImage] = useState(null)

    const windowWidth = Dimensions.get('window').width
    const windowHeight = Dimensions.get('window').height

    const getImageData = (data) => {
        setImage(data)
    }

    return (
        <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            position: 'relative',
        }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* <SearchBox /> */}
                <SearchContent openImage={getImageData} />
            </ScrollView>
            {
                image ?
                    <View style={{
                        position: 'absolute',
                        zIndex: 1,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(52,52,52,0.8)'
                    }}>
                        <StatusBar backgroundColor="#525252" barStyle="dark-content" />
                        <View style={{
                            position: 'absolute',
                            top: windowHeight / 6,
                            left: windowWidth / 12,
                            backgroundColor: 'white',
                            width: 350,
                            height: 465,
                            borderRadius: 15,
                            zIndex: 1,
                            elevation: 50
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: 10,
                                paddingHorizontal: 15
                            }}>
                                <Image source={image} style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 100
                                }} />
                                <View style={{ paddingLeft: 8 }}>
                                    <Text style={{ fontSize: 12, fontWeight: '600' }}>
                                        <Text>User</Text>
                                    </Text>
                                </View>
                            </View>
                            <Image source={image} style={{ width: '100%', height: '80%' }} />
                        </View>
                    </View> : null
            }
        </View>
    )
}

export default Search