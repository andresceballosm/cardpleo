import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import FormViewFive from './Forms/FormViewFive';
import styles from './Styles';

const viewFive = (props) => {
    const stateForm = props.stateForm;
    const submitForm = (values) => {
        //validate = true;
        stateForm.phone = values.phone;
        stateForm.email = values.email;
        stateForm.password = values.password;
        props.updateState({viewActive:'ViewSix', formSignUp:stateForm})
    }
    return(
        <View>
            <View style={styles.headerView}>
                <TouchableOpacity onPress={() => { props.back('ViewFour') }} style={styles.headerTouchable}>
                    <Image style={styles.headerIcon} source={require('../../assets/icons/back.png')}/>
                </TouchableOpacity>
                <View style={styles.headerViewText}>
                    <Text style={styles.headerText}>NECESITO DE LOS SIGUIENTES DATOS PARA CREAR TÚ CUENTA.</Text>
                </View>
            </View>
            <View> 
                <View style={{flex:.4}}>
                    <FormViewFive submitForm={submitForm} />
                </View>    
            </View>
        </View>              
    )
}

export default viewFive;