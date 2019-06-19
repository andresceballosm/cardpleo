import React, { Component } from 'react'
import { View,StyleSheet,Text, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { validate } from './Errors';
import { Field,reduxForm } from 'redux-form';
import { fieldName, fieldInput, fieldSlider, fieldSelect, fieldSelectBlank, fieldSelectLabel } from '../../../../Utils/Fields';
import { ButtonElevation } from '../../../../Utils/ButtonElevation';
const cargos = require('../../../../../data/cargos.json')

class Interests extends Component {
    constructor () {
        super()
        this.state = {
          selectedIndex: 1,
          disabled:true,
          area:false,
          newArea:false
        }
        this.updateIndex = this.updateIndex.bind(this)
        
    } 
    updateIndex (selectedIndex) {
        this.setState({ disabled: !this.state.disabled, selectedIndex })   
    }

    componentDidMount(){
        this.props.initialize(this.props.data);
    }

    updateArea = (values) => {
        this.setState({area:values})
        if(this.props.data.area){
            this.setState({newArea:true})
        }
    }

    render(){
        console.log('this.props esss',this.props)
        if(this.props.data.area){
            var initialArea = cargos.filter(item => item.area === this.props.data.area)
        }
        return (
            <View style={{height:300}} >
                <ScrollView style={styles.form}>
                    <Field 
                    name="area"     
                    onChange={()=> { this.props.change("cargos", null) }}
                    initialValue={ this.props.data.area ? this.props.data.area : null }
                    updateArea={this.updateArea} 
                    disabled={this.state.disabled}
                    component={fieldSelectBlank} 
                    data={ cargos } 
                    label={"Area:"} 
                    />
                    { this.state.area || this.props.data.cargos ?
                    <Field 
                    name="cargos"    
                    disabled={this.state.disabled} 
                    initialValue={ this.props.data.cargos && this.props.data.cargos !== null ? this.props.data.cargos : ''} 
                    data={this.props.data.cargos && !this.state.newArea ? initialArea[0].cargos : this.state.area.cargos} 
                    component={fieldSelectLabel} 
                    label={"Cargo:"} 
                    /> : <View></View>
                    }
                    <Field 
                    name="distance" 
                    disabled={this.state.disabled}
                    initialValue={this.props.data.distance ? this.props.data.distance : 0}  
                    component={fieldSlider} 
                    label={"Distancia:"} 
                    /> 
                </ScrollView>  
                <View style={styles.footer}>
                    { this.state.selectedIndex == 1 ? 
                        <ButtonElevation type={'edit'} click={ () => { this.updateIndex(2) }} />
                        :
                        <ButtonElevation type={'save'} click={ () => { 
                            console.log('props in button',this.props)
                            this.props.submitForm()
                            this.updateIndex(1) 
                        }} 
                        invalid={this.props.invalid}
                        />
                    }
                </View>
            </View>
        )  
    }
}

const styles = StyleSheet.create({
    form:{
        flex:.6,
        paddingBottom:20,
        paddingTop:20,
    },
    footer:{
        flex:.2,
        marginRight:5,
        marginBottom:10,
        alignItems:'flex-end',
    }
});

export default reduxForm({
    form: 'formInterests',
    validate,
  })(Interests);