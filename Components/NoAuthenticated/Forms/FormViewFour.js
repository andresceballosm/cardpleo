import React, { Component } from 'react'
import { View,StyleSheet,Text, TouchableOpacity } from 'react-native';
import { MapView, Permissions } from 'expo';
import { validate } from './Errors';
import { reduxForm } from 'redux-form';
import { LinearGradient } from 'expo'

class FormViewFour extends Component {
    constructor () {
        super()
        this.state = {
            location: {coords: { latitude: null, longitude: null, latitudeDelta: null, longitudeDelta: null}},
        }
    }

    async componentDidMount (){
        const { status } = await Permissions.getAsync(Permissions.LOCATION)

        if(status !== 'granted') {
            const response = await Permissions.askAsync(Permissions.LOCATION)
        }

        navigator.geolocation.getCurrentPosition (
            ({coords }) => 
                this.setState({ location : { 
                    latitude: coords.latitude, 
                    longitude: coords.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                } }, () => console.log('State:', this.state)),
            (error) => console.log('error:', error)
        )
    }

    _handleMapRegionChange = (mapRegion) => {
        this.setState({ location : mapRegion });
    }
    render() {
        if(this.state.location !== null) {
            return (
                <View style={styles.container}>
                    <MapView
                    style={{ alignSelf: 'stretch', height: 200 }}
                    region={{ latitude: this.state.location.latitude, longitude: this.state.location.longitude, 
                            latitudeDelta: this.state.location.latitudeDelta, longitudeDelta: this.state.location.longitudeDelta }}
                    onRegionChange={this._handleMapRegionChange}
                    >
                        <MapView.Marker
                            coordinate={this.state.location}
                            draggable
                            title="¿Es tú ubicación?"
                            description="Encontraré resultados para tí en base a esta ubicación"
                        />
                    </MapView>
                    <View style={styles.button}>
                        <LinearGradient style={{width: '100%', height: '100%', borderRadius: 30}} 
                        colors={['#724eb2','#724eb2', '#8accf2']}>
                            <TouchableOpacity style={styles.touchable} onPress={() => this.props.submitForm(this.state.location)}>
                                <Text style={styles.textButton}>SIGUIENTE</Text>
                            </TouchableOpacity>
                        </LinearGradient>    
                    </View>         
                </View>
            )
        }
        return (
            <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                <Text>Necesitamos tu permiso para acceder a tu ubicación</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex:.7,
      flexDirection:'column',
      alignItems:'center'
    },
    form:{
        flex:.5,
        alignItems:'center',
        paddingBottom:150
    },
    touchable:{
        flex:1, 
        justifyContent:'center', 
        alignItems:'center'
    },
    button:{
        flex:.2,
        borderRadius:30,
        height:45,
        width:160,
        paddingTop:20,
        alignItems:'center',
        justifyContent: 'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputContainer: {
        flex:1,
        borderBottomColor: '#F5FCFF',
        backgroundColor: 'rgba(249, 247, 247, 0.5)',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
    },
    viewText:{
        flex:.3,
        alignItems: 'center',
        marginBottom:10,
        marginTop:10
    },
    title: {
      fontSize: 14,
      fontWeight: 'bold',
      color:'#ffffff'
    },
    activeTitle: {
      color: 'red',
    },
    textButton:{
        color:'#ffffff'
    }
  });

export default reduxForm({
    form: 'SignUpTwoFormEmployer',
    validate,
  })(FormViewFour);