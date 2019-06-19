import React from 'react';
import { StyleSheet, View, Animated, Text, Easing, Modal } from 'react-native';

export default class Spin extends React.Component {
  constructor() {
    super();
    this.RotateValueHolder = new Animated.Value(0);
  }
  componentDidMount() {
    this.StartImageRotateFunction();
  }
  StartImageRotateFunction() {
    this.RotateValueHolder.setValue(0);
    Animated.timing(this.RotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
    }).start(() => this.StartImageRotateFunction());
  }
  render() {
    const RotateData = this.RotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
        <Modal
        transparent={true}
        animationType={'none'}
        visible={true}>
            <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                    <Animated.Image
                        style={{
                            width: 50,
                            height: 50,
                            transform: [{ rotate: RotateData }],
                        }}
                        source={require('../../assets/icons/spin.png')}
                    />
                    <Text>Cargando...</Text>
                </View>
            </View>
        </Modal>   
    );
  }
}
 
const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040'
    },
    activityIndicatorWrapper: {
        backgroundColor: 'rgba(249, 247, 247, 0.8)',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
});