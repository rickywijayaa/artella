import { Button } from '@rneui/themed'
import React from 'react'
import { View, Image, Text } from 'react-native'

const ResetPasswordSuccess = ({ navigation }) => {
    const loginPageClick = () => {
        navigation.navigate("Login")
    }

    return (
        <View>
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 100,
                paddingBottom: 80
            }}>
                <Image source={require("../../storage/images/reset-success.png")} style={{
                    width: 300,
                    height: 300
                }} />
                <Text style={{
                    paddingTop: 20,
                    fontSize: 14,
                }}>
                    We’ve sent email to reset  your password {"\n"}
                    please check your email for confirmation
                </Text>
                <View>
                    <Button buttonStyle={{
                        borderRadius: 8,
                        height: 35,
                        width: 330,
                        backgroundColor: '#798777',
                        marginTop: 10,
                    }} titleStyle={{
                        fontSize: 14,
                        fontWeight: 'bold'
                    }} title='Back To Login Page' onPress={loginPageClick} />
                </View>
            </View>
        </View>
    )
}

export default ResetPasswordSuccess