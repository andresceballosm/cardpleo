import React, { Component } from './node_modules/react';
import { StackNavigator } from './node_modules/react-navigation';
import  PlayersList  from '../Players';
import AddPlayerForm from '../Players/AddPlayerForm';
import ViewPlayerForm from '../Players/ViewPlayerForm';
import { StyleSheet, Image } from 'react-native';
import { traslateText } from '../../../../Config/Language/Utils';
import Icon from './node_modules/react-native-vector-icons/Ionicons';
import NTRPHelp from '../Players/NTRPHelp';
import UTRHelp from '../Players/UTRHelp';
import Ranking from '../Players/Ranking';

const StackPlayers = StackNavigator({
    'PlayersList': {
        screen: PlayersList,
        navigationOptions: ({ navigation, screenProps }) => {
            const headercolor = screenProps.headercolor;
            const headerfontcolor = screenProps.headerfontcolor;
            return {
                headerTitle: traslateText('headerplayerslist'),
                headerStyle: {
                    backgroundColor: headercolor ? headercolor : '#ffffff',
                },
                headerTintColor: headercolor ? headerfontcolor : '#0f0b0b',
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
                headerRight: (
                    <Icon name="ios-trophy" 
                    size={30} 
                    color={headercolor ? headerfontcolor : '#0f0b0b'}
                    style={[styles.ranking]}
                    onPress={() => {navigation.navigate('Ranking')}} />
                ),
                drawerIcon: ({ tintColor }) => (
                    <Image
                    source={require('../../../../Assets/icons/iconplayers.png')}
                    style={[styles.icon]}
                    />
                ),
            }
        },
    },
    'AddPlayerForm': {
        screen: AddPlayerForm,
        navigationOptions: ({ screenProps }) => {
            console.log('screenProps',screenProps)
            const headercolor = screenProps.headercolor;
            const headerfontcolor = screenProps.headerfontcolor;
            return {
                headerTitle: traslateText('headeraddplayer'),
                headerStyle: {
                    backgroundColor: headercolor ? headercolor : '#ffffff',
                },
                headerTintColor: headercolor ? headerfontcolor : '#0f0b0b',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize:14
                },
                drawerIcon: ({ tintColor }) => (
                    <Image
                    source={require('../../../../Assets/icons/iconcluborg.png')}
                    style={[styles.icon]}
                    />
                ),
            }
        },
    },
    'Ranking': {
        screen: Ranking,
        navigationOptions: ({ screenProps }) => {
            const headercolor = screenProps.headercolor;
            const headerfontcolor = screenProps.headerfontcolor;
            return {
                headerTitle: traslateText('ranking'),
                headerStyle: {
                    backgroundColor: headercolor ? headercolor : '#ffffff',
                },
                headerTintColor: headercolor ? headerfontcolor : '#0f0b0b',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize:14
                },
                drawerIcon: ({ tintColor }) => (
                    <Image
                    source={require('../../../../Assets/icons/iconcluborg.png')}
                    style={[styles.icon]}
                    />
                ),
            }
        },
    },
    'ViewPlayerForm': {
        screen: ViewPlayerForm,
        navigationOptions: ({ screenProps }) => {
            console.log('screenProps',screenProps)
            const headercolor = screenProps.headercolor;
            const headerfontcolor = screenProps.headerfontcolor;
            return {
                headerTitle: traslateText('headerviewplayer'),
                headerStyle: {
                    backgroundColor: headercolor ? headercolor : '#ffffff',
                },
                headerTintColor: headercolor ? headerfontcolor : '#0f0b0b',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize:14
                },
                drawerIcon: ({ tintColor }) => (
                    <Image
                    source={require('../../../../Assets/icons/iconcluborg.png')}
                    style={[styles.icon]}
                    />
                ),
            }
        },
    },
    'UTRHelp': {
        screen: UTRHelp,
        navigationOptions: ({ screenProps }) => {
            console.log('screenProps',screenProps)
            const headercolor = screenProps.headercolor;
            const headerfontcolor = screenProps.headerfontcolor;
            return {
                headerTitle: traslateText('utrheader'),
                headerStyle: {
                    backgroundColor: headercolor ? headercolor : '#ffffff',
                },
                headerTintColor: headercolor ? headerfontcolor : '#0f0b0b',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize:14
                },
                drawerIcon: ({ tintColor }) => (
                    <Image
                    source={require('../../../../Assets/icons/iconcluborg.png')}
                    style={[styles.icon]}
                    />
                ),
            }
        },
    },
    'NTRPHelp': {
        screen: NTRPHelp,
        navigationOptions: ({ screenProps }) => {
            console.log('screenProps',screenProps)
            const headercolor = screenProps.headercolor;
            const headerfontcolor = screenProps.headerfontcolor;
            return {
                headerTitle: traslateText('ntrpheader'),
                headerStyle: {
                    backgroundColor: headercolor ? headercolor : '#ffffff',
                },
                headerTintColor: headercolor ? headerfontcolor : '#0f0b0b',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize:14
                },
                drawerIcon: ({ tintColor }) => (
                    <Image
                    source={require('../../../../Assets/icons/iconcluborg.png')}
                    style={[styles.icon]}
                    />
                ),
            }
        },
    },
});

const styles = StyleSheet.create({
    icon: {
      width: 42,
      height: 42,
    },
    menu: {
      marginLeft: 10
    },
    ranking: {
        marginRight: 10
    }
});

export { StackPlayers };

