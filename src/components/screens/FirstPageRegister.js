import React, { useState } from 'react'
import { View, Text, TextInput, Image, Alert } from 'react-native'
import { Button } from '@rneui/base'
import axios from 'axios'
import { baseUrl } from '../../config/config'

const FirstPageRegister = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const registerApi = async () => {
        setIsLoading(true)
        let body = {
            name: fullName,
            email,
            password
        }

        try {
            const res = await axios.post(`${baseUrl}/register`, body);

            if (!res.data.access_token) {
                throw new Error("Something went wrong with the input");
            }

            Alert.alert(
                'Success',
                'Success Register',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
            );

            navigation.navigate("Login")
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

    const onChangePasswordHandler = (value) => {
        setPassword(value)
    }

    const onChangeEmailHandler = (value) => {
        setEmail(value)
    }

    const onChangeFullnameHandler = (value) => {
        setFullName(value)
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
            paddingVertical: 150

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
                    Full Name
                </Text>
                <TextInput onChangeText={onChangeFullnameHandler} value={fullName} style={{
                    marginVertical: 10,
                    borderRadius: 5,
                    width: '100%',
                    height: 30,
                    borderColor: '#BDD2B6',
                    borderWidth: 1,
                    paddingLeft: 5
                }} />
            </View>
            <View>
                <Text>
                    Email
                </Text>
                <TextInput onChangeText={onChangeEmailHandler} value={email} style={{
                    marginVertical: 10,
                    borderRadius: 5,
                    width: '100%',
                    height: 30,
                    borderColor: '#BDD2B6',
                    borderWidth: 1,
                    paddingLeft: 5
                }} />
            </View>
            <View>
                <Text>
                    Password
                </Text>
                <TextInput onChangeText={onChangePasswordHandler} value={password} secureTextEntry={true} style={{
                    marginVertical: 10,
                    borderRadius: 5,
                    width: '100%',
                    height: 30,
                    borderColor: '#BDD2B6',
                    borderWidth: 1,
                    paddingLeft: 5
                }} />
            </View>
            <View style={{
                alignItems: 'center',
            }}>
                <Button onPress={registerApi} buttonStyle={{
                    borderRadius: 8,
                    height: 35,
                    width: 330,
                    backgroundColor: '#798777',
                    marginTop: 10,
                }} titleStyle={{
                    fontSize: 14,
                    fontWeight: 'bold'
                }} title='Register' />
            </View>
        </View>
    )
}

export default FirstPageRegister