import { Button } from '@rneui/base'
import React from 'react'
import { View } from 'react-native'

const ResetPasswordFailed = () => {
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
                <Image source={require("../../storage/images/reset-failed.png")} style={{
                    width: 300,
                    height: 300
                }} />
                <Text style={{
                    paddingTop: 20,
                    fontSize: 14,
                }}>
                    Oops! Email not found.
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

export default ResetPasswordFailed