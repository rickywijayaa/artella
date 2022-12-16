import { Button } from '@rneui/themed';
import React, { useEffect } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'

const WelcomeScreen = ({ navigation }) => {
    const registerClick = () => {
        navigation.navigate("FirstPageRegister")
    }

    const loginClick = () => {
        navigation.navigate("Login")
    }

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Login")
        }, 5000);
    }, [])

    return (
        <>
            <View>
                <View style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: 200,
                    paddingBottom: 80
                }}>
                    <TouchableOpacity onPress={loginClick}>
                        <Image source={require("../../storage/images/welcome.png")} style={{
                            width: 300,
                            height: 300
                        }} />
                        <Text style={{
                            paddingTop: 20,
                            fontSize: 24,
                            fontWeight: 'bold',
                            color: '#798777',
                            textAlign: 'center'
                        }}>
                            Artella
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Button buttonStyle={{
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 0,
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 0,
                        height: 50,
                        width: 150
                    }} titleStyle={{
                        fontSize: 12
                    }} title='Register' color='#798777' onPress={registerClick} />
                    <Button onPress={loginClick} buttonStyle={{
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 5,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 5,
                        height: 50,
                        width: 150
                    }} titleStyle={{
                        fontSize: 12
                    }} title='Login' color='#8D9D8A' />
                </View> */}
            </View>
        </>
    )
}

export default WelcomeScreen