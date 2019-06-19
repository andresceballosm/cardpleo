import React, { Component } from 'react'
import { LinearGradient } from 'expo'
import { Text, TouchableOpacity, View, StyleSheet, Button, Image, Platform, ScrollView } from 'react-native'
import { ActionLogout } from '../../../../../Store/Actions/ActionLogout'
import { authentication } from '../../../../../Store/Services/Firebase'
import { connect } from 'react-redux'
import { Field,reduxForm } from 'redux-form'
import { ActionGetDataUser } from '../../../../../Store/Actions/ActionDataUser'
import { validate } from './Errors'
import { fieldName } from '../../../../Utils/Fields'
import SwitchSelector from 'react-native-switch-selector';
import Interests from './interests';
import PersonalData from './personalData';
import { ActionSetLoading } from '../../../../../Store/Actions/ActionApp';
import { ActionUpdateEmployee } from '../../../../../Store/Actions/ActionDataEmployes';

class Profile extends Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 1,
      isVisible: false,
      colorBtnCurrent:'#a192d3',
      colorBtnUpcoming:'#bcbcbc',
      dataLeague:'',
      idLeague:'',
    }
    this.updateIndex = this.updateIndex.bind(this)
    
  } 

  updateIndex (selectedIndex) {
    console.log('selectedIndex',selectedIndex)
    this.setState({selectedIndex})   
  }

  componentDidMount(){
    this.props.getDataUser(this.props.uidUser)
  }
  render() {
    const { navigation,loading, user, alertResponse } = this.props;
    const options = [
      { label: "Intereses", value: "1" },
      { label: "Mis Datos", value: "2" },
    ];

    const LoadingStatus = () => {
    console.log('loading', loading)
    if (loading == 'true')
         return <Spin />      
      return null;
    };

    const saveInterests = () => {
      const values  = this.props.form.formInterests.values
      const uidUser = this.props.uidUser
      this.props.saveInterests(values,uidUser)

    }
    return (
      <View style={styles.container}>
        { LoadingStatus() }
        { user !== null ?
        <View>
          <View style={styles.card}>
            <View style={styles.viewAvatar}>
              <Image
                style={styles.avatar}
                resizeMode='cover'
                source={{
                  uri: 'https://serseo.mx/wp-content/uploads/avatar-2.png'
                }}
              />
            </View>
          </View>
          <View style={styles.body}>
            <SwitchSelector
              textColor={'#7a44cf'} //'#7a44cf'
              selectedColor={'#ffffff'}
              buttonColor={'#7a44cf'}
              borderColor={'#7a44cf'}
              hasPadding
              options={options}
              initial={0}
              onPress={value => this.updateIndex(value)}
            />
             <View>
              { this.state.selectedIndex == 1 ? 
                <Interests data={this.props.user} submitForm={saveInterests} />
                : 
                <PersonalData data={this.props.user} submitForm={saveInterests}/> 
              } 
            </View>
          </View>  
        </View> 
        : <View></View>
        }
        <Button 
        title="Cerrar sesión" 
        onPress={() => { this.props.logout()}} 
        />
      </View>
    )
  }
}
const mapStateToProps = state => {
  console.log('state in profile', state)
  return {
    uidUser : state.ReducerSesion.uid,
    user    : state.ReducerDataUser,
    form    : state.form
  }
}

const mapDispatchToProps = dispatch => ({
  logout:()=>{
      authentication.signOut().then((response) => {
          dispatch(ActionLogout());
      })
  },
  getDataUser:(uid)=>{
    const typeUser = 'employees'
    dispatch(ActionGetDataUser({uid, typeUser}));
  },
  saveInterests:(values,uidUser) => {
    dispatch(ActionSetLoading());
    dispatch(ActionUpdateEmployee({ values, uidUser }))
  },
})

const styles = StyleSheet.create({
  container :{
    flex:1,
    alignItems:'center'
  },
  card: {
    flex: 1,
    width: 300,
    marginTop:50,
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
      },
      android: {
        elevation: 11,
      }
  })
  },
  body:{
    flex:2,
    paddingTop:10,
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent'
  },
  buttonBack:{
    marginTop:20
  },
  buttons:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center'
  },
  viewAvatar: {
    flex:1,
    alignItems:'center',
    marginTop:30
  },  
  avatar: {
    paddingVertical: 30,
    width: 150,
    height: 150,
    borderRadius: 75
  },
  viewText: {
    flex:2,
  },
  inputContainer: {
    flex:1,
    backgroundColor: '#ffffff',
    borderRadius:30,
    width:250,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center'
  },
  inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
