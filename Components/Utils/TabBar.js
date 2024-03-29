import React from 'react';
import {
    SafeAreaView,
    View,
    TouchableWithoutFeedback,
    StyleSheet,
    Text
} from 'react-native'

const TabBar = (props) => {
    console.log(props)
    const {
        navigation: {state: {index, routes}},
        getLabel,
        style,
        activeTintColor,
        inactiveTintColor,
        renderIcon,
        jumpToIndex,
        showLabel,
        backgroundFeaturedIcon,
        tabFeatured,
        activeFeaturedTintColor,
        inactiveFeatureTintColor
    } = props;
    return (
        <SafeAreaView style={{
            flexDirection: 'row',
            height: 50,
            width: '100%',
            ...style
        }}>
            {
                routes.map((route, idx) => (
                    <SafeAreaView
                        key={route.key}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <TouchableWithoutFeedback
                            onPress={() => {
                                console.log('route',route)
                                jumpToIndex(route.key)
                            }}
                        >
                            <View style={styles.iconContainer}>
                                <View style = {route.key == tabFeatured ? [{backgroundColor: backgroundFeaturedIcon}, styles.customIcon]: styles.defaultIcon}>
                                {renderIcon({
                                    route,
                                    focused: index === idx,
                                    tintColor: index === idx ? 
                                        route.key !== tabFeatured ?
                                        activeTintColor 
                                        :
                                        activeFeaturedTintColor
                                    : 
                                    route.key !== tabFeatured ?
                                        inactiveTintColor 
                                        :
                                        inactiveFeatureTintColor
                                })}
                                </View>
                                {}

                                {showLabel ? <Text style={[styles.iconLabel, {color: index === idx ? activeTintColor : inactiveTintColor}]}>
                                {route.key !== tabFeatured ? getLabel({
                                    route,
                                }) : null}
                                </Text> : null}
                            </View>
                        </TouchableWithoutFeedback>
                    </SafeAreaView>
                ))
            }
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
  customIcon: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    transform: [
      { translateY: -20}
    ]
  },
  iconContainer: {
      justifyContent: 'center',
      alignItems: 'center'
  },
  iconLabel: {
      fontSize: 9,
      fontWeight: '600'
  }
})

export default TabBar;