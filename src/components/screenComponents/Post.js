import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, Linking, Alert } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionic from 'react-native-vector-icons/Ionicons'
import { baseUrlImg, whatsappNumber } from '../../helper/staticDataHelper'
import * as SecureStore from "expo-secure-store";
import axios from 'axios'
import { baseUrl } from '../../config/config'

const Post = ({ navigation }) => {
    const sendWhatsappMessage = (name) => {
        Linking.openURL(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Hi ${name},I want buy your art`)
    }

    const [PostList, setPostList] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    const baseUrlAPIForImg = "http://188.166.191.119/storage";

    useEffect(() => {
        if (PostList.length == 0) {
            setIsLoading(true);
            const loadData = async () => {
                try {
                    const token = await SecureStore.getItemAsync('secure_token');

                    const res = await axios.get(`${baseUrl}/post/all`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    const newObj = res.data.data.map(x => {
                        return {
                            ...x,
                            photo: `${baseUrlAPIForImg}/${x.photo}`,
                            liked: false,
                        }
                    })

                    setPostList(newObj);
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
    }, [PostList])

    const clickLike = async (id, isLike) => {
        if (isLike === true) {
            await unLikeApi(id);
        } else {
            await likeApi(id);
        }

        let result = PostList.map(x => {
            return {
                ...x,
                liked: x.id === id ? !x.liked : x.liked
            }
        })

        setPostList(result)
    }

    const likeApi = async (id) => {
        try {
            setIsLoading(true);
            const token = await SecureStore.getItemAsync('secure_token');
            const res = await axios.post(`${baseUrl}/post/like/${id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            Alert.alert(
                'Success',
                'Like Success',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
            );
        } catch (err) {
            Alert.alert(
                'Error',
                err.toString(),
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
            );
        } finally {
            setIsLoading(false);
        }
    }

    const unLikeApi = async (id) => {
        try {
            setIsLoading(true);
            const token = await SecureStore.getItemAsync('secure_token');
            const res = await axios.post(`${baseUrl}/post/unlike/${id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            Alert.alert(
                'Success',
                'Unlike Success',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
            );
        } catch (err) {
            Alert.alert(
                'Error',
                err.toString(),
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
            );
        } finally {
            setIsLoading(false);
        }
    }

    const archiveApi = async (id) => {
        try {
            setIsLoading(true);
            const token = await SecureStore.getItemAsync('secure_token');
            let body = {
                user_post_id: id
            }

            const res = await axios.post(`${baseUrl}/archive`, body, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            Alert.alert(
                'Success',
                'Success Archive',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
            );
        } catch (err) {
            Alert.alert(
                'Error',
                err.toString(),
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
            );
        } finally {
            setIsLoading(false);
        }
    }

    if (isLoading) {
        return <View>
            <Text>Loading</Text>
        </View>
    }

    return (
        <View>
            {PostList.length > 0 ? (
                PostList.map((data, index) => {
                    // const [liked, setIsLiked] = useState(false)
                    return (
                        <View key={index} style={{
                            paddingBottom: 10,
                            borderBottomColor: 'gray',
                            borderBottomWidth: 0.1,
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: 15
                            }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={baseUrlImg} style={{ width: 40, height: 40, borderRadius: 100 }} />
                                    <View style={{ paddingLeft: 5 }}>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                                            {data.name}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Image source={{ uri: data.photo }} style={{ width: '100%', height: 400 }} />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{ paddingVertical: 5, paddingHorizontal: 15, flexDirection: 'row', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => clickLike(data.id, data.liked)}>
                                        <AntDesign name={data.liked ? "heart" : "hearto"}
                                            style={{
                                                paddingRight: 10, fontSize: 20,
                                                color: data.liked ? "red" : "black"
                                            }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => sendWhatsappMessage(data.name)}>
                                        <Ionic name='cart-outline' style={{ fontSize: 22 }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => archiveApi(data.id)} style={{ paddingLeft: 10 }}>
                                        <Ionic name='bookmark-outline' style={{ fontSize: 20 }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <Text style={{ paddingHorizontal: 15 }}>
                                    {data.likes} Others
                                </Text>
                            </View>
                            <View>
                                <Text style={{ paddingVertical: 5, paddingHorizontal: 15 }}>
                                    {data.description}
                                </Text>
                            </View>
                        </View >
                    )
                })
            ) : (
                <Text>No Found</Text>
            )
            }
        </View >
    )
}

export default Post