import React, { useEffect, useState } from 'react'
import { View, Text, StatusBar, ScrollView } from 'react-native'
import Post from '../screenComponents/Post'

const Home = () => {
    const title = {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#798777',
    }

    return (
        <View style={{ backgroundColor: "white", height: '100%' }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" animated={true} />
            <View style={{
                paddingHorizontal: 20,
                paddingBottom: 10
            }}>
                <Text style={title}>
                    Artella
                </Text>
            </View>

            <ScrollView>
                <Post />
            </ScrollView>
        </View>
    )
}

export default Home