import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Home from '../Pages/Home';
import Favorites from '../Pages/Favorites';
import Profile from '../Pages/Profile';
import Icon from 'react-native-vector-icons/Ionicons';

const EmployerRoutes = TabNavigator({
    'Favoritos': {
      screen: Favorites,
    },
    'Home': {
      screen: Home,
    },
    'Perfil': {
      screen: Profile,
    },
  },{
    initialRouteName: 'Home',
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = focused ? require('../../../../assets/icons/job.png') : require('../../../../assets/icons/jobgray.png') ;
        } else if (routeName === 'Favoritos') {
          iconName = focused ? require('../../../../assets/icons/like.png') : require('../../../../assets/icons/likegray.png');
        } else if (routeName === 'Perfil') {
          iconName = focused ? require('../../../../assets/icons/profile.png') : require('../../../../assets/icons/profilegray.png');
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Image source={iconName} size={25} style={[styles.icon]}/>;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'purple',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

const styles = StyleSheet.create({
  icon: {
    width: 42,
    height: 42,
  }
});

export { EmployerRoutes };  