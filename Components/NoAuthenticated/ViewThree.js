import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import FormViewThree from './Forms/FormViewThree';
import styles from './Styles';

const viewThree = (props) => {
    const stateForm = props.stateForm;
    const submitForm = (values) => {
        stateForm.region = values.region.departamento;
        stateForm.city = values.city;
        props.updateState({viewActive:'ViewFour', formSignUp: stateForm })
    }
    return(
        <View>
            <View style={styles.headerView}>
                <TouchableOpacity onPress={() => { props.back('ViewTwo') }} style={styles.headerTouchable}>
                    <Image style={styles.headerIcon} source={require('../../assets/icons/back.png')}/>
                </TouchableOpacity>
                <View style={styles.headerViewText}>
                    <Text style={styles.headerText}>EMPECEMOS CON TU UBICACIÓN</Text>
                </View>
            </View>
            <View style={{flex:.4}}>
                <FormViewThree data={props.data} submitForm={submitForm}/>
            </View>          
        </View>              
    )
}

export default viewThree;