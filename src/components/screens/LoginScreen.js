import { Icon } from '@rneui/base'
import { Button } from '@rneui/themed'
import React from 'react'
import { Text, TextInput, View } from 'react-native'

const LoginScreen = ({ navigation }) => {
    const forgetPasswordPage = () => {
        navigation.navigate("ForgotPassword")
    }

    const loginPageClick = () => {
        navigation.navigate("BottomTab")
    }

    const registerPageClick = () => {
        navigation.navigate("FirstPageRegister")
    }

    return (
        <View style={{
            paddingHorizontal: 40,
            minHeight: '100%',
            backgroundColor: 'white',
            flexDirection: 'column',
            paddingVertical: 220

        }}>
            <Text style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: '#798777',
                textAlign: 'center'
            }}>
                Artella
            </Text>
            <View>
                <Text>
                    Email
                </Text>
                <TextInput style={{
                    marginVertical: 10,
                    borderRadius: 5,
                    width: '100%',
                    height: 30,
                    borderColor: '#BDD2B6',
                    borderWidth: 1,
                }} />
            </View>
            <View>
                <Text>
                    Password
                </Text>
                <TextInput style={{
                    marginVertical: 10,
                    borderRadius: 5,
                    width: '100%',
                    height: 30,
                    borderColor: '#BDD2B6',
                    borderWidth: 1,
                }} />
            </View>
            <View style={{
                alignItems: 'center',
            }}>
                <Button onPress={loginPageClick} buttonStyle={{
                    borderRadius: 8,
                    height: 35,
                    width: 330,
                    backgroundColor: '#798777',
                    marginTop: 10,
                }} titleStyle={{
                    fontSize: 14,
                    fontWeight: 'bold'
                }} title='Login ' />
            </View>
            <View style={{
                marginTop: 10
            }}>
                <Button onPress={registerPageClick} buttonStyle={{
                    borderColor: 'black',
                    borderRadius: 8
                }} titleStyle={{
                    fontSize: 14,
                    color: 'black',
                }} type='outline' title="Don't have an account ?" />
            </View>
            <View style={{
                marginTop: 15
            }}>
                <Button onPress={forgetPasswordPage} titleStyle={{
                    fontSize: 14,
                    color: 'black'
                }} type='clear' title='Forget Password?' />
            </View>
        </View>
    )
}

export default LoginScreen