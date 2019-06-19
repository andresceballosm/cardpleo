import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, StyleSheet, Button,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import SignInForm from './Forms/SignInForm';
import { ActionLogin } from '../../Store/Actions/ActionLogin';
import { ActionSetLoading, ActionCloseAlertResponse } from '../../Store/Actions/ActionApp';
import { LoadingSmall } from '../Utils/LoadingSmall';
import { AlertResponse } from '../Utils/AlertResponse';
import Spin from '../Utils/Spin';


// create a component
class SignIn extends Component {
  userLogin= (values) => {
    this.props.login(values);
  }
  
  render() {
    const { navigation,loading, alertResponse } = this.props;
    const LoadingStatus = () => {
      if (loading == 'true')
         return <Spin />      
      return null;
    };
    const OpenAlertResponse = () => {
      if (alertResponse.alertResponse == true)
          return <AlertResponse 
                  msg={alertResponse.response} 
                  closeModalError={this.props.closeModalError} 
                  />;
      return null;
  };   
    return (
        <View style={styles.container}>
          <View style={styles.headerImage}>
              
          </View>
           <View>
              { OpenAlertResponse() }
              { LoadingStatus() }
          </View>
          <SignInForm login={this.userLogin} />
          <TouchableOpacity style={styles.register} onPress={() => { navigation.navigate('SignUp')}}>
            <Text style={styles.textSignUp}>Registrarse</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  headerImage: {
    height: 200, 
    alignItems:'center', 
    justifyContent:'center'
  },
  banner: {
    height:60,
    width:240,
},
  textSignUp:{
    fontSize:18,
  },
  register:{
    alignItems:'center'
  },
  image: {
    height:200, 
    width:200, 
    borderRadius:60
}, 
});

// make this component available to the app

const mapStateToProps = state => ({
  prop: state.prop,
  loading: state.app.loading,
  alertResponse: state.ReducerAlertResponse,
});

const mapDispatchToProps = dispatch => ({
  login: (data) => {
    dispatch(ActionSetLoading());
    dispatch(ActionLogin(data));
  },
  closeModalError: () => {
    dispatch(ActionCloseAlertResponse()); 
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

