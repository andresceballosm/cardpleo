import React, { Component }  from 'react'
import { View,StyleSheet,Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import {fieldName} from '../../Utils/Fields';
import { validate } from './Errors';
import { Field,reduxForm } from 'redux-form';
import { LinearGradient } from 'expo'

class FormViewTwo extends Component {
    componentDidMount(){
        this.props.initialize(this.props.data);
    }
    render(){
        return (
        <View style={styles.container}>
            <View style={styles.form}>
                <View style={styles.viewText}>
                    <Text style={styles.title}>Dime tú nombre</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={require('../../../assets/icons/loginuser.png')}/>
                    <Field name="firstname"  component={fieldName}  />
                </View>
                <View style={styles.viewText}>
                    <Text style={styles.title}>y tú apellido por favor</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={require('../../../assets/icons/account.png')}/>
                    <Field name="lastname" component={fieldName}  />
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
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputContainer: {
        flex:1,
        backgroundColor: '#ffffff',
        borderRadius:30,
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
        flex:1,
        marginTop: 20,
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
  })(FormViewTwo);