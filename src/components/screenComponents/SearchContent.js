import React, { useState, useEffect } from 'react'
import { Image, Text, TouchableOpacity, View, TextInput } from 'react-native'
import { SearchContentData } from '../../helper/staticDataHelper'
import * as SecureStore from "expo-secure-store";
import axios from 'axios'
import { baseUrl } from '../../config/config'
import Ionic from 'react-native-vector-icons/Ionicons'

const SearchContent = (props) => {
    const suggestedSearchData = SearchContentData.filter(x => x.type == "SUGGESTED");
    const [isLoading, setIsLoading] = useState(false);
    const [input, setInput] = useState('');

    const [searchContent, setSearchContent] = useState([]);

    const baseUrlAPIForImg = "http://188.166.191.119/storage";

    const searchApi = async (name) => {
        if (searchContent.length == 0) {
            setIsLoading(true);
            const loadData = async () => {
                try {
                    const token = await SecureStore.getItemAsync('secure_token');

                    const res = await axios.get(`${baseUrl}/post/search?name=${name}`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    const newObj = res.data.data.map(x => `${baseUrlAPIForImg}/${x.photo}`)

                    setSearchContent(newObj);

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
    }

    const handleTextChange = async (text) => {
        setInput(text);
    };

    const handleSubmit = async () => {
        await searchApi(input);
    };

    if (isLoading) {
        return <View>
            <Text>Loading...</Text>
        </View>
    }

    return (
        <View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                paddingVertical: 10,
                position: 'relative'
            }}>
                <Ionic name='search' style={{ fontSize: 18, opacity: 0.7, position: 'absolute', zIndex: 1, left: 25 }} />
                <TextInput onSubmitEditing={handleSubmit} value={input} onChangeText={handleTextChange} placeholder='Looking for something...' placeholderTextColor="#909090" style={{ width: '94%', height: 40, backgroundColor: '#ebebeb', borderRadius: 10, alignItems: 'center', justifyContent: 'center', fontSize: 15, padding: 5, paddingLeft: 40 }} />
            </View>
            <View>
                {
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {searchContent.map((data, index) => (
                            <TouchableOpacity
                                key={index}
                                style={{ marginBottom: 10 }}
                            >
                                <Image source={{ uri: data }} style={{ width: 137, height: 150 }} />
                            </TouchableOpacity>
                        ))}
                    </View>

                }
            </View>
        </View>
    )
}

export default SearchContent