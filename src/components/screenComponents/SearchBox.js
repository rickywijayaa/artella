import React from 'react'
import { Text, TextInput, View } from 'react-native'
import Ionic from 'react-native-vector-icons/Ionicons'

const SearchBox = () => {
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            paddingVertical: 10,
            position: 'relative'
        }}>
            <Ionic name='search' style={{ fontSize: 18, opacity: 0.7, position: 'absolute', zIndex: 1, left: 25 }} />
            <TextInput placeholder='Looking for something...' placeholderTextColor="#909090" style={{ width: '94%', height: 40, backgroundColor: '#ebebeb', borderRadius: 10, alignItems: 'center', justifyContent: 'center', fontSize: 15, padding: 5, paddingLeft: 40 }} />
        </View>
    )
}

export default SearchBox