import React from 'react'

const Logout = () => {
    return (
        <View>
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 100,
                paddingBottom: 80
            }}>
                <Image source={require("../../storage/images/welcome.png")} style={{
                    width: 300,
                    height: 300
                }} />
                <Text style={{
                    paddingTop: 20,
                    fontSize: 14,
                }}>
                    You’ve Log Out from Artella!
                </Text>
                <View>
                    <Button title='Back To Login Page' />
                </View>
            </View>
        </View>
    )
}

export default Logout