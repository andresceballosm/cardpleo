import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { ActionLogout } from '../../../../../Store/Actions/ActionLogout'
import { authentication } from '../../../../../Store/Services/Firebase'
import { connect } from 'react-redux'

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
        <Button 
        title="Cerrar sesión" 
        onPress={() => { this.props.logout()}} 
        />
      </View>
    )
  }
}
const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => ({
  logout:()=>{
      authentication.signOut().then((response) => {
          dispatch(ActionLogout());
      })
  },
})

const styles = StyleSheet.create({
  container :{
    flex:1,
    paddingTop:50,
    alignItems:'center'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
