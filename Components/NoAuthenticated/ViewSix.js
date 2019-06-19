import React, { Component } from 'react';
import { View,Text, Button, TouchableOpacity, Image } from 'react-native';
import styles from './Styles';

class viewSix extends Component {
    render(){
        return(
        <View>
            <View style={styles.headerView}>             
                <TouchableOpacity onPress={() => { this.props.back('ViewFive') }} style={styles.headerTouchable}>
                    <Image style={styles.headerIcon} source={require('../../assets/icons/back.png')}/>
                </TouchableOpacity>
                <View style={styles.headerViewText}>
                    <Text style={styles.headerText}>ESTAMOS LISTOS PARA REGISTRARTE...</Text>
                </View>
            </View>
            <View style={{flex:1, alignItems:'center', paddingBottom:50, paddingTop:30}}>
                <Text style={{color:'#004d40'}}>ACEPTA TERMINOS Y CONDICIONES</Text>
            </View>         
            <View style={{flex:.5, marginLeft:5, marginRight:5}}>
                <Button 
                style={{backgroundColor:'#00bcd4',}}
                //type="Outline"
                title="REGISTRARME"
                onPress={()=>{this.props.register()}} 
                color="#00bcd4"
                /> 
            </View> 
        </View>              
        )
    }
}

export default viewSix