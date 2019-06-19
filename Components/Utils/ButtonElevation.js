import React from 'react'
import { Platform, View , StyleSheet, Image, TouchableOpacity } from 'react-native'

const typeButton = (type) => {
    switch (type) {
        case 'edit':
           return require('../../assets/icons/edit.png')
        case 'save':
            return require('../../assets/icons/save.png')   
        default:
            break;
    }
}
const ButtonElevation = (props) => {
    return (
        <TouchableOpacity disabled={props.invalid} onPress={()=>{ props.click()}} style={styles.viewEdit}>
            <Image 
            style={styles.inputIcon} 
            source={typeButton(props.type)}
            />
        </TouchableOpacity>  
    )
}

const styles = StyleSheet.create({
    viewEdit:{
        alignItems: 'center',
        justifyContent:'center',
        width:50,
        height:50,       
        borderRadius:50,
        backgroundColor: '#ffffff',
        ...Platform.select({
            ios: {
              padding: 10,
              shadowColor: '#000000',
              shadowOffset: {
                width: 0,
                height: 3
              },
              shadowRadius: 5,
              shadowOpacity: 1.0
            },
            android: {
              elevation: 11,
            }
        })
    },
    inputIcon:{
        width:30,
        height:30,
    },
})

export { ButtonElevation }
