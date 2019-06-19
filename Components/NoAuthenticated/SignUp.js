import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {connect} from 'react-redux';
import { ActionRegisterEmployer, ActionRegisterEmployee } from '../../Store/Actions/ActionRegister';
import { ActionSetLoading, ActionCloseAlertResponse } from '../../Store/Actions/ActionApp';
import { AlertResponse } from '../Utils/AlertResponse';
import SignUpFormEmployer from './Forms/SignUpFormEmployer';
import ViewOne from './ViewOne';
import ViewTwo from './ViewTwo';
import ViewThree from './ViewThree';
import ViewFour from './ViewFour';
import ViewFive from './ViewFive';
import ViewSix from './ViewSix';
import Spin from '../Utils/Spin';

class SignUp extends Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 1,
      isVisible: false,
      viewActive:'ViewOne',
      typeUser: null,
      formSignUp: {
        firstname : '',
        lastname  : '',
        region    : '',
        city      : '',
        location  : '',
        password  : '',
        phone     : '',
      }
    }
  }

  changeOpenModalCountries = () => {
     this.setState({ openModalCountries : !this.state.openModalCountries}) 
  }

  changeCountrySelected = (country) => {
    this.setState({ countrySelected : country}) 
  }
  
  userRegister = () => {
    this.props.register(this.state.formSignUp, this.state.typeUser);
  }

  updateState= newState => {
    this.setState(newState);
  }

  back= screen => {
    this.setState({viewActive:screen});
  }

  render() {
    const { loading, alertResponse, navigation } = this.props;
    const validateView = () => {
      switch (this.state.viewActive) {
        case 'ViewOne':
          return <ViewOne  navigation={navigation} updateState={this.updateState} back= {this.back} />
        case 'ViewTwo':
          return <ViewTwo data={this.state.formSignUp} updateState={this.updateState} back= {this.back} />
        case 'ViewThree':
          return <ViewThree data={this.state.formSignUp} stateForm={this.state.formSignUp} updateState={this.updateState} back= {this.back} />
        case 'ViewFour':
          return <ViewFour stateForm={this.state.formSignUp} updateState={this.updateState}  back= {this.back}/>
        case 'ViewFive':
          return <ViewFive data={this.state.formSignUp} stateForm={this.state.formSignUp} updateState={this.updateState} back= {this.back} />  
        case 'ViewSix':
          return <ViewSix stateForm={this.state.formSignUp} register={this.userRegister} updateState={this.updateState} back= {this.back} />
        default:
          return <View></View>
      }
    }

    const LoadingStatus = () => {
      if (loading == 'true')
        return 
          <Spin />
      return null;
    }

    const OpenAlertResponse = () => {
      if (alertResponse == true)
         return <AlertResponse 
                  msg={alertResponse.response} 
                  closeModal={this.props.closeModal()}  
                />;
      return null;
    }

    return ( 
      <ScrollView>                                                                 
        <View>
          {validateView()}
        </View>    
        <View>
          {LoadingStatus()}
        </View> 
        <View>
          {OpenAlertResponse()}
        </View>                       
      </ScrollView>                
    );
  }
}

const mapStateToProps = state => {
  return{
    loading: state.app.loading,
    alertResponse: state.ReducerAlertResponse,
  }
};

const mapDispatchToProps = dispatch => ({
  register: (values, typeUser) => {
    dispatch(ActionSetLoading());
    typeUser === 'employer' ? dispatch(ActionRegisterEmployer(values)) : dispatch(ActionRegisterEmployee(values));
  },
  closeModal: () => {
    dispatch(ActionCloseAlertResponse());
  },
});

const styles = StyleSheet.create({
  containerSingUp: {
    flex: 1,
    paddingHorizontal: 6,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

