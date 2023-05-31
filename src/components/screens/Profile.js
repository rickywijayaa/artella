import React, { useState, useEffect } from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity, StatusBar, Linking, Dimensions, TextInput, Alert } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ProfilePostImageData } from '../../helper/staticDataHelper'
import * as SecureStore from "expo-secure-store";
import axios from 'axios'
import { baseUrl } from '../../config/config'
import { whatsappNumber } from '../../helper/staticDataHelper'

const Profile = ({ navigation }) => {
    const [isLiked, setIsLiked] = useState(false)
    const [modal, setModal] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [profilePostImage, setProfilePostImage] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [totalPost, setTotalPost] = useState(0);
    const [description, setDescription] = useState('');

    const baseUrlAPIForImg = "http://188.166.191.119/storage";

    const isSuccessClick = () => {
        setModal(!modal)
        setIsSuccess(!isSuccess)
    }

    const submittedClick = () => {
        setIsSuccess(!isSuccess);
        sendWhatsappMessage();
    }

    const sendWhatsappMessage = () => {
        Linking.openURL(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Hi i request, ${description}`)
    }

    const changeRequestDescription = (text) => {
        setDescription(text);
    }

    const windowWidth = Dimensions.get('window').width
    const windowHeight = Dimensions.get('window').height

    const logout = () => {
        Alert.alert(
            'Success',
            'Success Logout',
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
        );

        SecureStore.deleteItemAsync('secure_token').then(
            navigation.navigate("Login")
        );
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            if (profilePostImage.length == 0) {
                setIsLoading(true);
                const loadData = async () => {
                    try {
                        const token = await SecureStore.getItemAsync('secure_token');

                        const res = await axios.post(`${baseUrl}/post/my-post`, null, {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        });

                        const newObj = res.data.data.map(x => `${baseUrlAPIForImg}/${x.photo}`)
                        setProfilePostImage(newObj);
                        setTotalPost(newObj.length);

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
        });

        return unsubscribe;
    }, [navigation])

    if (isLoading) {
        return <View>
            <Text>Loading...</Text>
        </View>
    }

    return (
        <View style={{ backgroundColor: 'white', height: '100%' }}>
            <View>
                <ImageBackground source={require("../../storage/images/profile-bg.jpg")} style={{ resizeMode: 'cover', width: 450, height: 150 }}>
                    <View style={{ paddingTop: 30, paddingHorizontal: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 400 }}>
                        <Image source={require("../../storage/images/photo.png")} style={{ resizeMode: 'cover', width: 60, height: 60 }} />
                        <Text style={{ textAlign: 'center', color: 'white' }}>
                            <Text style={{ fontWeight: 'bold' }}>{totalPost}</Text> {"\n"} Posts
                        </Text>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>
                            |
                        </Text>
                        <Text style={{ textAlign: 'center', color: 'white' }}>
                            <Text style={{ fontWeight: 'bold' }}>1.45k</Text>{"\n"} Likes
                        </Text>
                        <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
                            <AntDesign name={isLiked ? "heart" : "hearto"}
                                style={{
                                    paddingRight: 10, fontSize: 20,
                                    color: isLiked ? "red" : "white",
                                    fontWeight: 'bold'
                                }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingHorizontal: 40, paddingTop: 10 }}>
                        <Text style={{ color: 'white' }}>
                            <Text style={{ fontWeight: 'bold' }}>
                                Circle~
                            </Text> {"\n"}
                            Passionate Digital Graphic Designer
                        </Text>
                    </View>
                </ImageBackground>
                <View style={{ marginTop: 10, flexDirection: 'row', paddingHorizontal: 35 }}>
                    <TouchableOpacity onPress={() => setModal(!modal)} activeOpacity={0}>
                        <View style={{
                            width: 350,
                            height: 35,
                            marginRight: 10,
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#798777',
                            padding: 10,
                        }}>
                            <Text style={{
                                color: 'white',
                                fontWeight: 'bold'
                            }}>
                                Request Drawing
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {/* <TouchableOpacity activeOpacity={0}>
                        <View style={{
                            marginLeft: 10,
                            width: 160,
                            height: 35,
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#798777',
                            padding: 10,
                        }}>
                            <Text style={{
                                color: 'white',
                                fontWeight: 'bold'
                            }}>
                                Profile Setting
                            </Text>
                        </View>
                    </TouchableOpacity> */}
                </View>
                <View style={{ marginTop: 10, flexDirection: 'row', paddingHorizontal: 35 }}>
                    <TouchableOpacity onPress={logout} activeOpacity={0}>
                        <View style={{
                            width: 350,
                            height: 35,
                            marginRight: 10,
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#798777',
                            padding: 10,
                        }}>
                            <Text style={{
                                color: 'white',
                                fontWeight: 'bold'
                            }}>
                                Logout
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {/* <TouchableOpacity activeOpacity={0}>
                        <View style={{
                            marginLeft: 10,
                            width: 160,
                            height: 35,
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#798777',
                            padding: 10,
                        }}>
                            <Text style={{
                                color: 'white',
                                fontWeight: 'bold'
                            }}>
                                Profile Setting
                            </Text>
                        </View>
                    </TouchableOpacity> */}
                </View>
                <View style={{ paddingHorizontal: 35, marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {
                            profilePostImage.map((img, index) => {
                                return (
                                    <Image style={{ width: 100, height: 100 }} key={index} source={{ uri: img }} />
                                )
                            })
                        }
                    </View>
                </View>
            </View>
            {
                modal ? <View style={{
                    position: 'absolute',
                    zIndex: 1,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(52,52,52,0.8)'
                }}>
                    <StatusBar backgroundColor="#525252" barStyle="dark-content" />
                    <View style={{
                        position: 'absolute',
                        top: windowHeight / 18,
                        left: windowWidth / 12,
                        backgroundColor: 'white',
                        width: 350,
                        height: 650,
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
                            <View>
                                <View style={{ minWidth: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ width: 200, height: 200, margin: 'auto' }} source={require("../../storage/images/modal-img.jpg")} />
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>
                                        Creative minds are {"\n"} rarely tidy.
                                    </Text>
                                    <View style={{ borderRadius: 5, marginTop: 10, minWidth: '100%', height: 300, backgroundColor: '#ECECEC' }}>
                                        <TextInput onChangeText={changeRequestDescription} placeholder='Please write down your request here.' style={{ padding: 10, fontSize: 12 }} />
                                    </View>
                                    <TouchableOpacity onPress={isSuccessClick}>
                                        <View style={{
                                            marginTop: 10,
                                            width: 200,
                                            height: 35,
                                            marginRight: 10,
                                            borderRadius: 5,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: '#798777',
                                            padding: 10,
                                        }}>
                                            <Text style={{
                                                color: 'white',
                                                fontWeight: 'bold'
                                            }}>
                                                Submit
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View> : null
            }
            {
                isSuccess ? <View style={{
                    position: 'absolute',
                    zIndex: 1,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(52,52,52,0.8)'
                }}>
                    <StatusBar backgroundColor="#525252" barStyle="dark-content" />
                    <View style={{
                        position: 'absolute',
                        top: windowHeight / 4,
                        left: windowWidth / 12,
                        backgroundColor: 'white',
                        width: 350,
                        height: 350,
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
                            <View>
                                <View style={{ minWidth: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        fontSize: 18,
                                    }}>
                                        Wohooo!
                                    </Text>
                                    <Image style={{ width: 150, height: 150, marginVertical: 15 }} source={require("../../storage/images/success-logo.jpg")} />
                                    <Text style={{ fontSize: 12, textAlign: 'center', color: '#6F6F6F' }}>
                                        Your request was successfully {"\n"} submitted.
                                    </Text>
                                    <TouchableOpacity onPress={submittedClick}>
                                        <View style={{
                                            marginTop: 20,
                                            width: 200,
                                            height: 35,
                                            marginRight: 10,
                                            borderRadius: 5,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: '#798777',
                                            padding: 10,
                                        }}>
                                            <Text style={{
                                                color: 'white',
                                                fontWeight: 'bold'
                                            }}>
                                                Close
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View> : null
            }
        </View>
    )
}

export default Profile