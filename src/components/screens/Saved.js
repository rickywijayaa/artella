import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import SavedContent from '../screenComponents/SavedContent'

const Saved = () => {
    const title = {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#798777',
    }
    return (
        <View style={{
            backgroundColor: 'white',
            paddingHorizontal: 20,
            paddingBottom: 10,
            minHeight: '100%'
        }}>
            <Text style={title}>
                Artella
            </Text>
            <ScrollView>
                <SavedContent />
            </ScrollView>
        </View>
    )
}

export default Saved