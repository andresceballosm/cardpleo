
import React from 'react'
import { Text, View, TextInput,StyleSheet, Picker } from 'react-native'
import ModalSelector from 'react-native-modal-selector'
import PhoneInput from 'react-native-phone-input'
import { Slider } from 'react-native-elements'

export const fieldName = (props) => {
    return (
      <View style={styles.inputs}>
          <TextInput 
            placeholder={props.ph}
            style={{fontSize:16, color:'#666768', fontWeight:'bold', marginTop:15,marginBottom:10}}
            editable={props.editable}
            onChangeText={props.input.onChange}
            textContentType={props.ContentType}
            value={props.input.value}
            keyboardType={props.input.name === 'email' ? 'email-address' : 'default'}
            autoCapitalize="none"
            secureTextEntry={!!(props.input.name === 'password' || props.input.name === 'confirmation')}
            onBlur={props.input.onBlur}
          />
      { props.meta.touched &&
        props.meta.error && <Text style={{color:'#666768'}}>{props.meta.error}</Text>}
      </View>
    );
};
//Campos tipo TextInput que NO son del formulario de registro
export const fieldInput = (props) => {
  return (
    <View style={styles.fieldInput} >
        <Text>{props.label}</Text>
        <TextInput 
          placeholder={props.ph}
          style={styles.textFieldInput}
          editable={props.editable}
          onChangeText={props.input.onChange}
          textContentType={props.ContentType}
          value={props.input.value}
          autoCapitalize="none"
          onBlur={props.input.onBlur}
        />
    { props.meta.touched &&
      props.meta.error && <Text style={{color:'#666768'}}>{props.meta.error}</Text>}
    </View>
  );
};
export const fieldSlider = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
      <Text>{props.label}</Text>
      <Slider
        initialValue={props.initialValue}
        disabled={props.disabled}
        maximumValue={50}
        step={2}
        minimumValue={1}
        thumbTintColor={'#7a44cf'}
        value={props.input.value}
        onValueChange={props.input.onChange}
      />
      <Text> {props.input.value} km </Text>
    </View>
  )
}

export const fieldSelect = (props) => {
  return (
      <View style={styles.selects}>
        <ModalSelector
          key={props.data.key}
          data={props.data}
          labelExtractor= {item => item}
          initValue={ props.initialValue ? props.initialValue : 'Seleccionar'}
          cancelButtonAccessibilityLabel='Cancelar'
          onChange={ props.input.onChange} 
        />
      </View>
    )
};

export const fieldSelectBlank = (props) => {
  console.log('props in select',props)
  return (
      <View style={styles.selectBlank}>
        <Text>{props.label}</Text>
        <ModalSelector
          key={props.data.key}
          disabled={props.disabled}
          data={props.data}
          labelExtractor= {item => item.area}
          initValue={ props.initialValue ? props.initialValue : 'Seleccionar'}
          cancelButtonAccessibilityLabel='Cancelar'
          onChange={ (values) => {
            props.input.onChange(values.area);
            props.updateArea(values)
          }} 
        />
      </View>
    )
};

export const fieldSelectLabel = (props) => {
  return (
      <View style={styles.selectBlank}>
        <Text>{props.label}</Text>
        <ModalSelector
          key={props.data.key}
          data={props.data}
          disabled={props.disabled}
          labelExtractor= {item => item}
          initValue={ props.initialValue ? props.initialValue : 'Seleccionar'}
          cancelButtonAccessibilityLabel='Cancelar'
          onChange={ props.input.onChange} 
        />
      </View>
    )
};

export const fieldSelectRegions = (props) => {
  return (
      <View style={styles.selects}>
        <ModalSelector
          key={props.data.key}
          data={props.data}
          labelExtractor= {item => item.departamento}
          initValue={ props.initialValue ? props.initialValue : 'Seleccionar'}
          cancelButtonAccessibilityLabel='Cancelar'
          onChange={ (values) => {
            props.input.onChange(values);
            props.updateRegion(values)
          }} 
        />
      </View>
    )
};

export const fieldPhone = (props) => {
  return(
      <PhoneInput
        confirmText="ok"
        initialCountry='co'
        style={styles.phone}
        cancelText="Cancelar"
        pickerButtonColor="#007AFF"
        value={ props.input.value }
        onBlur={props.input.onBlur}
        onChangePhoneNumber={props.input.onChange}
        onPressFlag={props.input.onChange}
      />
  )
};
    

const styles = StyleSheet.create({
  container: {
    flex:.7,
    flexDirection:'column'
  },
  TextInput:{
    flex:1,
    alignItems:'center',
    marginLeft:20
  },
  fieldInput:{
    flex:1,
    paddingBottom:12
  },
  textFieldInput:{
    fontSize:16, 
    color:'#666768', 
    fontWeight:'bold',
    borderBottomWidth:.5,
    borderBottomColor: '#ccc9c9',
    marginTop:5
  },
  phone:{
    marginLeft:10
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#ccc9c9',
      flex:1,
  },
  selects:{
      marginLeft:16,
      width:250,
      backgroundColor: 'rgba(249, 247, 247, 0.8)',
  },
  selectBlank:{
    marginBottom:10,
    backgroundColor: 'rgba(249, 247, 247, 0.8)',
},
  ModalSelector:{
    fontSize:16, 
    color:'#ffffff', 
    fontWeight:'bold'
  }
});
