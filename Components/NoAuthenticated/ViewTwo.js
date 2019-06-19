import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import FormViewTwo from './Forms/FormViewTwo';
import styles from './Styles';

const viewTwo = (props) => {
    const submitForm = (values) => {
        props.updateState({viewActive:'ViewThree', formSignUp:values})
    }
    return(
        <View>
            <View style={styles.headerView}>
                <TouchableOpacity onPress={() => { props.back('ViewOne') }} style={styles.headerTouchable}>
                    <Image style={styles.headerIcon} source={require('../../assets/icons/back.png')}/>
                </TouchableOpacity>
                <View style={styles.headerViewText}>
                    <Text style={styles.headerText}>HOLA HUMANO SERÉ TU ASISTENTE EN ESTA BUSQUEDA.</Text>
                </View>
            </View>
            <View style={{flex:.4}}>
                <FormViewTwo data={props.data} submitForm={submitForm} />
            </View>            
        </View>              
    )
}
export default viewTwo;