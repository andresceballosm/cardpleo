// import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { dataBase } from '../Store/Services/Firebase';
import { ActionTypeUSer } from '../Store/Actions/ActionTypeUser';
import { ActionSetLoading } from '../Store/Actions/ActionApp';
import { EmployerRoutes } from './Authenticated/Employer/Routes/EmployerRoutes';
import { EmployeeRoutes } from './Authenticated/Employee/Routes/EmployeeRoutes';

// create a component
class TypeUSer extends Component {
  componentDidMount() {
    console.log('this.props==',this.props)
    this.props.getTypeUser(this.props.userUid.uid);
  }

  render() {
    return (
      <View style={styles.container} /*style={setStyle(this.props.setting.backgroundcolor)}*/>
        { this.props.typeUser == 'employer' ? <EmployerRoutes screenProps={this.props.setting} /> : <EmployeeRoutes /> } 
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => ({   
    userUid: state.ReducerSesion,
    typeUser: state.ReducerTypeUser,
    setting: state.ReducerSettingClub,
});

const mapDispatchToProps = dispatch => ({
  getTypeUser: (uid) => {
    var userRef = dataBase.collection('users').doc(uid);
    userRef.get().then((data) => {
        console.log('data1',data._document.proto.fields.type.stringValue)
        if(data.exists){
          dispatch(ActionSetLoading());
          dispatch(ActionTypeUSer(data._document.proto.fields.type.stringValue))
        }else{
          console.log('No such document!');
        }
    })
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TypeUSer);

