import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../Pages/Home';


const StackAboutProfile = StackNavigator({
    AboutProfile: {
        screen: Home,  
        navigationOptions: ({ navigation, screenProps }) => {
            return {
                headerTitle: 'ABOUT PROFILE',
                headerStyle: {
                    backgroundColor: '#ffffff',
                },
                headerTintColor: '#0f0b0b',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize:14
                },
                headerLeft: (
                    <Icon name="ios-menu" 
                    size={30} 
                    color={headercolor ? headerfontcolor : '#0f0b0b'}
                    style={[styles.menu]}
                    onPress={() => {navigation.navigate('DrawerOpen')}} />
                ),
                drawerIcon: ({ tintColor }) => (
                    <Image
                    source={require('../../../../Assets/icons/iconcluborg.png')}
                    style={[styles.icon]}
                    />
                ),
            }
        },  
    },
}
);

const styles = StyleSheet.create({
    icon: {
      width: 42,
      height: 42,
    },
    menu: {
        marginLeft: 10
    }
});

export { StackAboutProfile}
