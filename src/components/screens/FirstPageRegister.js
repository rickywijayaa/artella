import React from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import { Button } from '@rneui/base'

const FirstPageRegister = ({ navigation }) => {
    const registerSecondPage = () => {
        navigation.navigate("SecondPageRegister")
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
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 20
            }}>
                <Image style={{
                    width: 150,
                    height: 150,
                }} source={require("../../storage/images/pic.png")} />
            </View>
            <View>
                <Text>
                    Full Name
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
                <Button onPress={registerSecondPage} buttonStyle={{
                    borderRadius: 8,
                    height: 35,
                    width: 330,
                    backgroundColor: '#798777',
                    marginTop: 10,
                }} titleStyle={{
                    fontSize: 14,
                    fontWeight: 'bold'
                }} title='Continue' />
            </View>
        </View>
    )
}

export default FirstPageRegister