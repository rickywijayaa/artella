import React, { useState } from 'react'
import { TextInput, View, Text } from 'react-native'
import { Button } from '@rneui/base'

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState("")

    const resetPasswordClick = () => {
        if (email == "Circle@gmail.com") {
            navigation.navigate("ResetPasswordFailed")
        } else {
            navigation.navigate("ResetPasswordSuccess")
        }
    }

    return (
        <View style={{
            paddingHorizontal: 40,
            minHeight: '100%',
            backgroundColor: 'white',
            flexDirection: 'column',
            paddingVertical: 300

        }}>
            <Text style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: '#798777',
                textAlign: 'center'
            }}>
                Artella
            </Text>
            {/* Profile Picture */}
            <View>
                <Text>
                    Email
                </Text>
                <TextInput onChange={(e) => setEmail(e.target.value)} value={email} style={{
                    marginVertical: 10,
                    borderRadius: 5,
                    width: '100%',
                    height: 30,
                    borderColor: '#BDD2B6',
                    borderWidth: 1,
                    paddingLeft: 10
                }} />
            </View>
            <View style={{
                alignItems: 'center',
            }}>
                <Button onPress={resetPasswordClick} buttonStyle={{
                    borderRadius: 8,
                    height: 35,
                    width: 330,
                    backgroundColor: '#798777',
                    marginTop: 10,
                }} titleStyle={{
                    fontSize: 14,
                    fontWeight: 'bold'
                }} title='Reset Password' />
            </View>
        </View>
    )
}

export default ForgotPassword