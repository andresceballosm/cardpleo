import React from 'react';
import { View, Text, StyleSheet, TextInput, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { Field, reduxForm } from 'redux-form';
import {fieldName} from '../../Utils/Fields';


const validate = (values) => {
  const errors = {};
  if (!values.clubname) {
    errors.clubname = 'Requerido';
  }
  
  if (!values.administrator) {
    errors.administrator = 'Requerido';
  }

  if (!values.mainAddress) {
    errors.mainAddress = 'Requerido';
  }

  if (!values.phone) {
    errors.phone = 'Requerido';
  }

  if (!values.email) {
    errors.email = 'Requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'email invalido';
  }

  if (!values.password) {
    errors.password = 'Requerido';
  } else if (values.password.length < 6) {
    errors.password = 'Minimo 6 caracteres';
  } else if (values.password.length > 15) {
    errors.password = 'Maximo 15 caracteres';
  }

  if (!values.confirmation) {
    errors.confirmation = 'Requerido';
  } else if (values.password !== values.confirmation) {
    errors.confirmation = 'Contraseña no coincide';
  }

  return errors;
};

const SignUpFormEmployer = (props) => {
  return (
    <View>
      <Field name="firstname" component={fieldName} ph={'Nombre'} />
      <Field name="lastname" component={fieldName} ph={'Apellidos'} />
      <Field name="activity" component={fieldName} ph={'Tipo De Negocio'} />
      <Field name="businessName" component={fieldName} ph={'Nombre Del Negocio'} />
      <Field name="region" component={fieldName} ph={'Región'} />
      <Field name="city" component={fieldName} ph={'Ciudad'} />
      <Field name="mainAddress" component={fieldName} ph={'Dirección'} />
      <Field name="phone" component={fieldName} ph={'Telefono'} />
      <Field name="email" component={fieldName} ph="email@email.com" />
      <Field name="password" component={fieldName} ph={'Contraseña'} />
      <Field name="confirmation" component={fieldName} ph={'Confirmar Contraseña'} />
      <Button
        title='Registrarse'
        type="clear"
        onPress={props.handleSubmit(props.register)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  linea: {
    height: 2,
  },
  errors: {
    color: '#FF0000',
  },
  texPhone: {
    flexDirection: 'row',
    alignItems:'center',
    borderBottomWidth:.5,
    paddingHorizontal: 10,
    paddingBottom:Platform.OS === 'ios' ? 5 : 0,
    paddingTop:Platform.OS === 'ios' ? 2 : 0,
  },
  texCountry: {
    flexDirection: 'row',
    alignItems:'center',
    borderBottomWidth:.5,
    paddingHorizontal: 10,
    paddingBottom:Platform.OS === 'ios' ? 5 : 5,
    paddingTop:Platform.OS === 'ios' ? 2 : 5,
  },
  textInput:{
    paddingBottom:Platform.OS === 'ios' ? 5 : 5,
    paddingTop:Platform.OS === 'ios' ? 2 : 2,
  },
  viewCode:{
    flex:1, 
    alignItems:'flex-start',
    paddingBottom:Platform.OS === 'ios' ? 10 : 5,
  },   
  viewPhone:{
      flex:3, 
  },
  viewCountry:{
    flex:2, 
  },
});

export default reduxForm({
  form: 'SignUpFormAdmin',
  validate,
})(SignUpFormEmployer);
