import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import Profile from './Profile';
import Saved from './Saved';
import Search from './Search';

export const IndexHomeScreen = () => {
    const Stack = createNativeStackNavigator()
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 80
                },
                tabBarIcon: ({ focused, size, colour }) => {
                    let iconName;
                    if (route.name === "Feeds") {
                        iconName = focused ? "grid" : "grid-outline";
                        size = focused ? size + 8 : size + 2;
                    } else if (route.name == "Search") {
                        iconName = focused ? "search" : "ios-search-outline";
                        size = focused ? size + 8 : size + 2;
                    } else if (route.name == "Saved") {
                        iconName = focused ? "bookmark" : "bookmark-outline";
                        size = focused ? size + 8 : size + 2;
                    } else if (route.name == "Profile") {
                        iconName = focused ? "ios-person-circle" : "ios-person-outline";
                        size = focused ? size + 8 : size + 2;
                    }

                    return <Ionic name={iconName} size={size} color={colour} />
                }
            })}
        >
            <Tab.Screen name='Feeds' component={Home} />
            <Tab.Screen name='Search' component={Search} />
            <Tab.Screen name='Saved' component={Saved} />
            <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    )
}

export default IndexHomeScreen
