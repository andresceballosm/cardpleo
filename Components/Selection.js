
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { StackNoAuthenticated } from './NoAuthenticated/StackNoAuthenticated';
import TypeUser from './TypeUser';
import { authentication } from '../Store/Services/Firebase';
import { ActionLoadComplete } from '../Store/Actions/ActionApp';
import { ActionLogout } from '../Store/Actions/ActionLogout';
import { ActionSetSesion } from '../Store/Actions/ActionSetSesion';

class Selection extends Component {
  componentDidMount() {
    this.props.authentication()
  }
  render(){
    return (
      <View style={styles.container}>
        { this.props.user ? <TypeUser /> : <StackNoAuthenticated />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => {
  return{
  user: state.ReducerSesion,
  }
};

const mapDispatchToProps = dispatch => ({
  authentication: () => {
    authentication.onAuthStateChanged((usuario) => {
      if (usuario) {
        dispatch(ActionSetSesion(usuario));
        dispatch(ActionLoadComplete());
      } else {
        dispatch(ActionLoadComplete());
        dispatch(ActionLogout());
      }
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Selection);


