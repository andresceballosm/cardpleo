import React, { Component } from 'react'
import { View,StyleSheet,Text, TouchableOpacity, Scrroll } from 'react-native'
import {fieldSelectRegions, fieldSelect} from '../../Utils/Fields'
import { validate } from './Errors'
import { Field,reduxForm } from 'redux-form'
import { LinearGradient } from 'expo'

const regiones = require('../../../data/colombia.json')

class FormViewThree extends Component {
    constructor () {
        super()
        this.state = {
            region:false,
            newRegion:false
        }
    }

    componentDidMount(){
        this.props.initialize(this.props.data);
    }

    updateRegion = (values) => {
        this.setState({region:values})
        if(this.props.data.region){
            this.setState({newRegion:true})
        }
    }
    render() {
        if(this.props.data.region){
            var initialRegion = regiones.filter(item => item.departamento === this.props.data.region)
        }
        return <View style={styles.container}>
            <View style={styles.form}>
                <View style={styles.viewText}>
                    <Text style={styles.title}>En que región te encuentras</Text>
                </View>
                <View >
                    <Field 
                    name="region" 
                    initialValue={this.props.data.region} 
                    updateRegion={this.updateRegion} 
                    data={regiones} 
                    component={fieldSelectRegions}  />
                </View>    
                    { this.state.region || this.props.data.city ?
                    <View >
                        <View style={styles.viewText}>
                            <Text style={styles.title}>Y ahora tú ciudad</Text>
                        </View>
                        <Field 
                        name="city" 
                        initialValue={ !this.state.newRegion ? this.props.data.city : ''} 
                        data={this.props.data.city && !this.state.newRegion ? initialRegion[0].ciudades : this.state.region.ciudades} 
                        component={fieldSelect}  />
                    </View> : <View></View>
                    }
            </View>
            <View style={styles.button}>
                <LinearGradient style={{width: '100%', height: '100%', borderRadius: 30}} 
                colors={['#724eb2','#724eb2', '#8accf2']}>
                    <TouchableOpacity style={styles.touchable} onPress={this.props.handleSubmit(this.props.submitForm)}>
                        <Text style={styles.textButton}>SIGUIENTE</Text>
                    </TouchableOpacity>
                </LinearGradient>    
            </View>             
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
      flex:.7,
      flexDirection:'column',
      alignItems:'center'
    },
    form:{
        flex:.4,
        alignItems:'center',
        paddingBottom:150
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
      color:'#666768'
    },
    activeTitle: {
      color: 'red',
    },
    touchable:{
        flex:1, 
        justifyContent:'center', 
        alignItems:'center'
    },
    button:{
        flex:.3,
        borderRadius:30,
        height:45,
        width:160,
        alignItems:'center',
        justifyContent: 'center'
    },
    textButton:{
        color:'#ffffff'
    }
  });

export default reduxForm({
    form: 'SignUpTwoFormEmployer',
    validate,
  })(FormViewThree);