import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import FormViewFour from './Forms/FormViewFour';
import styles from './Styles';

const viewFour = (props) => {
    const stateForm = props.stateForm;
    const submitForm = (values) => {
        stateForm.location = values;
        props.updateState({ viewActive:'ViewFive', formSignUp: stateForm})
    }
    return(
        <View>
            <View style={styles.headerView}>
                <TouchableOpacity onPress={() => { props.back('ViewThree') }} style={styles.headerTouchable}>
                    <Image style={styles.headerIcon} source={require('../../assets/icons/back.png')}/>
                </TouchableOpacity>
                <View style={styles.headerViewText}>
                    <Text sytle={styles.headerText}>
                        NECESITO TU UBICACIÓN PARA DARTE RESULTADOS CERCA A TÍ.
                    </Text>
                </View>
            </View>
            <View style={{flex:.4}}>
                <FormViewFour submitForm={submitForm} />
            </View>          
        </View>              
    )
}

export default viewFour;