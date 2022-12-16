import React from 'react'
import { View, Image } from 'react-native'
import { SavedImageData } from '../../helper/staticDataHelper'

const SavedContent = () => {
    return (
        <View style={{ minHeight: '100%' }}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {
                    SavedImageData.map((data, index) => {
                        return (
                            <>
                                <View key={index} style={{ paddingVertical: 2 }}>
                                    <Image source={data.image} style={{ width: 122, height: 150, paddingVertical: 10 }} />
                                </View>
                            </>
                        )
                    })
                }
            </View>

        </View>
    )
}

export default SavedContent