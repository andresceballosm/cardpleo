import React, { Component } from 'react'
import { View,StyleSheet,Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import {fieldName, fieldPhone} from '../../Utils/Fields'
import { validate } from './Errors'
import { Field,reduxForm } from 'redux-form'
import { LinearGradient } from 'expo'

class FormViewFive extends Component {
    componentDidMount(){
        this.props.initialize(this.props.data);
    }
    render(){
        return (
        <View style={styles.container}>
            <View>
                <View style={styles.form}>             
                    <View style={styles.viewText}>
                        <Text style={styles.title}>Ingresa indicativo del país +  tú número de teléfono</Text>
                    </View>
                    <View style={styles.inputContainer}>                 
                        <Field name="phone" component={fieldPhone}  />                   
                    </View>
                    <View style={styles.viewText}>
                        <Text style={styles.title}>Ahora tú correo electrónico</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={require('../../../assets/icons/email.png')}/>
                        <Field name="email" component={fieldName}  />
                    </View>
                    <View style={styles.viewText}>
                        <Text style={styles.title}>Ingresa una buena contraseña</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={require('../../../assets/icons/password.png')}/>
                        <Field name="password" component={fieldName}  />
                    </View>
                    <View style={styles.viewText}>
                        <Text style={styles.title}>Confirmemos que la contraseña sea correcta</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={require('../../../assets/icons/password.png')}/>
                        <Field name="confirmation" component={fieldName}  />
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
            </View>       
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex:.7,
      flexDirection:'column'
    },
    form:{
        flex:.5,
        alignItems:'center',
        paddingBottom:150
    },
    viewPhone: {
        marginLeft:10
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
        backgroundColor: '#FFFFFF',
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
    form: 'SignUpFirstFormEmployer',
    validate,
  })(FormViewFive);