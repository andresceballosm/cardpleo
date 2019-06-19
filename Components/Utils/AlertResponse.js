import React from 'react';
import { Alert, View, StyleSheet } from 'react-native';

export const AlertResponse= (props) => {
    const { msg } = props;
    const showAlert = () =>{
        var message = '';
        if(msg.code == 'auth/email-already-in-use'){
            message = 'Email ya esta en uso';
            props.closeModal
            setTimeout( () => {	
                Alert.alert(
                    'Alerta',
                    message,
                    [
                        {   text: 'Aceptar', onPress: () => props.closeModal },
                    ],
                    {cancelable: false},   
                );
            },600)
        }
        
        if(msg.code == 1){
            //Code 1 response successfull
            message = msg.msg;
            props.closeModal
            setTimeout( () => {	
                Alert.alert(
                    'Alerta',
                    message,
                    [
                        {   text: 'Aceptar', onPress: () => props.closeModal },
                    ],
                    {cancelable: false},   
                );
            },600)
        }else if(msg.code == 2){
            //code 2 response error
            if(msg.msg.code == "auth/wrong-password"){
                message = "authwrongpassword"
            }else if(msg.msg.code == "auth/user-not-found"){
                message = "authusernotfound"
            } else {
                message = msg.msg;
            }
            props.closeModalError()
            setTimeout( () => {	
                Alert.alert(
                   'Alerta',
                    message,
                    [
                        {   text: 'Aceptar', onPress: () => props.closeModalError() },
                    ],
                    {cancelable: false},   
                );
            },600)
        }      
    }
    return (
        <View>
            { showAlert()}
        </View>
    )   
}

const styles = StyleSheet.create ({
    button: {
       backgroundColor: '#4ba37b',
       width: 100,
       borderRadius: 50,
       alignItems: 'center',
       marginTop: 100
    }
 });
