import React from 'react'
import { Text, View, TextInput } from 'react-native'
import { Button } from '@rneui/base'

const SecondPageRegister = ({ navigation }) => {
    const loginPageClick = () => {
        navigation.navigate("Login")
    }

    return (
        <View>
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
                {/* Profile Picture */}
                <View>
                    <Text>
                        Phone No.
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
                        City
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
                        Address
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
                        Occupation
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
                        Instagram
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
                    }} title='Continue' />
                </View>
            </View>
        </View>
    )
}

export default SecondPageRegister