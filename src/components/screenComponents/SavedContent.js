import React, { useEffect, useState } from 'react'
import { View, Image } from 'react-native'
import { SavedImageData } from '../../helper/staticDataHelper'
import * as SecureStore from "expo-secure-store";
import axios from 'axios'
import { baseUrl } from '../../config/config'

const SavedContent = ({ navigation }) => {
    const [savedImage, setSavedImage] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    const baseUrlAPIForImg = "http://188.166.191.119/storage";

    useEffect(() => {
        if (savedImage.length == 0) {
            setIsLoading(true);
            const loadData = async () => {
                try {
                    const token = await SecureStore.getItemAsync('secure_token');

                    const res = await axios.get(`${baseUrl}/archive/all`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    const newObj = res.data.data.map(x => `${baseUrlAPIForImg}/${x.photo}`)

                    setSavedImage(newObj);
                } catch (err) {
                    Alert.alert(
                        'Error',
                        err.toString(),
                        [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
                    );
                } finally {
                    setIsLoading(false);
                }
            };
            loadData();
        }
    }, [navigation])

    return (
        <View style={{ minHeight: '100%' }}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {
                    savedImage.map((data, index) => {
                        return (
                            <>
                                <View key={index} style={{ paddingVertical: 2 }}>
                                    <Image source={{ uri: data }} style={{ width: 122, height: 150, paddingVertical: 10 }} />
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