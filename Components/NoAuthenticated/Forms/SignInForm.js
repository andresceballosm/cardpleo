import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = (props) => {
  return (
    <View style={styles.textInput}>
      <TextInput
        placeholder={props.ph}
        onChangeText={props.input.onChange}
        value={props.input.value}
        keyboardType={props.input.name === 'email' ? 'email-address' : 'default'}
        autoCapitalize="none"
        secureTextEntry={!!(props.input.name === 'password' || props.input.name === 'confirmacion')}
        onBlur={props.input.onBlur}
      />
      <View style={styles.linea} />
      {props.meta.touched &&
        props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
    </View>
  );
};

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email invalido';
  }

  if (!values.password) {
    errors.password = 'Requerido';
  } else if (values.password.length < 6) {
    errors.password = 'Requerido';
  } else if (values.password.length > 15) {
    errors.password = 'Requerido';
  }

  return errors;
};

const SignInForm = (props) => {
  return (
    <View>
      <Field name="email" component={fieldNombre} ph="email@email.com" />
      <Field name="password" component={fieldNombre} ph="******" />
      <View style={styles.button}>
        <Button 
          onPress= {props.handleSubmit(props.login)}
          title= 'Ingresar'
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 16,
    borderBottomWidth:0.5
  },
  linea: {
    //backgroundColor: '#DCDCDC',
    height: 2,
  },
  errors: {
    color: '#FF0000',
  },
  button:{
    alignItems:'center'
  }
});

export default reduxForm({
  form: 'SignInForm',
  validate,
})(SignInForm);
