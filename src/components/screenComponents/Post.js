import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import { PostList } from '../../helper/staticDataHelper'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionic from 'react-native-vector-icons/Ionicons'
import DoubleClick from 'react-native-double-tap'
import { whatsappNumber } from '../../helper/staticDataHelper'

const Post = () => {
    const sendWhatsappMessage = () => {
        Linking.openURL(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Hi,I want buy your art`)
    }

    return (
        <View>
            {
                PostList.map((data, index) => {
                    const [liked, setIsLiked] = useState(data.isLiked)
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
                                    <Image source={data.profileImage} style={{ width: 40, height: 40, borderRadius: 100 }} />
                                    <View style={{ paddingLeft: 5 }}>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                                            {data.title}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                {/* <DoubleClick doubleTap={() => {
                                    setIsLiked(!liked)
                                }}
                                    delay={200}> */}
                                <Image source={data.images} style={{ width: '100%', height: 400 }} />
                                {/* </DoubleClick> */}
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{ padding: 5, flexDirection: 'row', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => setIsLiked(!liked)}>
                                        <AntDesign name={liked ? "heart" : "hearto"}
                                            style={{
                                                paddingRight: 10, fontSize: 20,
                                                color: liked ? "red" : "black"
                                            }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={sendWhatsappMessage}>
                                        <Ionic name='cart-outline' style={{ fontSize: 22 }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ paddingLeft: 10 }}>
                                        <Ionic name='bookmark-outline' style={{ fontSize: 20 }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <Text style={{ paddingHorizontal: 5 }}>
                                    Liked By {liked ? 'You and ' : ''}
                                    {liked ? data.likes + 1 : data.likes} Others
                                </Text>
                            </View>
                            <View>
                                <Text style={{ padding: 5 }}>
                                    {data.description}
                                </Text>
                            </View>
                        </View >
                    )
                })
            }
        </View >
    )
}

export default Post