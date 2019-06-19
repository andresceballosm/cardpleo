import React, { Component } from 'react'
import { View,StyleSheet,Text, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { validate } from './Errors';
import { Field,reduxForm } from 'redux-form';
import { fieldName, fieldInput } from '../../../../Utils/Fields';
import { ButtonElevation } from '../../../../Utils/ButtonElevation';

class PersonalData extends Component {
    constructor () {
        super()
        this.state = {
          selectedIndex: 1,
          editable:false
        }
        this.updateIndex = this.updateIndex.bind(this)
        
    } 
    updateIndex (selectedIndex) {
        this.setState({ editable: !this.state.editable, selectedIndex })   
    }

    componentDidMount(){
        this.props.initialize(this.props.data);
    }
    
    render(){
        return (
            <ScrollView >
                <View style={styles.form}>
                    <Field name="firstname" component={fieldInput} label={"Nombre:"} editable={this.state.editable}/>
                    <Field name="lastname"  component={fieldInput} label={"Apellidos:"} editable={this.state.editable}/>
                    <Field name="phone"     component={fieldInput} label={"Teléfono:"} editable={this.state.editable}/> 
                    <Field name="email"     component={fieldInput} label={"Correo electrónico:"} editable={false}/>
                </View>  
                <View style={styles.footer}>
                    { this.state.selectedIndex == 1 ? 
                        <ButtonElevation type={'edit'} click={ () => { this.updateIndex(2) }} />
                        :
                        <ButtonElevation type={'save'} click={ () => { this.updateIndex(1) }}/>
                    }
                </View>
            </ScrollView>
        )  
    }
}

const styles = StyleSheet.create({
    form:{
        flex:.8,
        paddingBottom:20,
        paddingTop:50,
    },
    footer:{
        flex:.2,
        marginRight:5,
        marginBottom:10,
        alignItems:'flex-end',
    }
});

export default reduxForm({
    form: 'PersonalData',
    validate,
  })(PersonalData);