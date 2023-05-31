import { Icon } from '@rneui/base'
import { Button } from '@rneui/themed'
import React, { useEffect, useState } from 'react'
import { Alert, Text, TextInput, View } from 'react-native'
import axios from 'axios'
import { baseUrl } from '../../config/config'
import * as SecureStore from "expo-secure-store";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onChangeEmailHandler = (value) => {
        setEmail(value)
    }

    const onChangePasswordHandler = (value) => {
        setPassword(value)
    }

    const forgetPasswordPage = () => {
        navigation.navigate("ForgotPassword")
    }

    const loginPageClick = async () => {
        await login();
        // navigation.navigate("BottomTab")
    }

    const registerPageClick = () => {
        navigation.navigate("FirstPageRegister")
    }

    const login = async () => {
        setIsLoading(true)
        let body = {
            email,
            password
        }

        try {
            const res = await axios.post(`${baseUrl}/login`, body);
            if (!res.data.access_token) {
                throw new Error("Something went wrong with the input");
            }

            let token = res.data.access_token;

            await SecureStore.setItemAsync('secure_token', token);
            navigation.navigate("BottomTab")
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
            <Text>Loading...</Text>
        </View>
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
                    paddingLeft: 5
                }} onChangeText={onChangeEmailHandler} value={email} />
            </View>
            <View>
                <Text>
                    Password
                </Text>
                <TextInput secureTextEntry={true} style={{
                    marginVertical: 10,
                    borderRadius: 5,
                    width: '100%',
                    height: 30,
                    borderColor: '#BDD2B6',
                    borderWidth: 1,
                    paddingLeft: 5
                }} onChangeText={onChangePasswordHandler} value={password} />
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
        </View>
    )
}

export default LoginScreen