import React from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { LinearGradient } from 'expo'

const viewOne = (props) => {
    return(
      <View >
          <View style={{flex: 1, flexDirection: 'row', paddingBottom:100, paddingTop:50}}>
            <TouchableOpacity onPress={() => { props.navigation.navigate('SignIn') }} style={{flex:.2,justifyContent: 'flex-start' }}>
                <Image style={{ width:50,height:50,marginLeft:15,justifyContent: 'center'}} 
                source={require('../../assets/icons/back.png')}/>
            </TouchableOpacity>
            <View style={{flex:.8, justifyContent: 'flex-end', paddingRight:10 }}>
              <Text style={{fontSize:20, color:'#666768'}}>INICIA UNA GRAN EXPERIENCIA...</Text>
            </View>
          </View>
          <View style={{flex:1, alignItems:'center', paddingBottom:50, paddingTop:30}}>
            <Text style={{color:'#004d40'}}>BUSCANDO</Text>
          </View>
          <View style={{flex:1, flexDirection:'row', alignContent:'center',justifyContent: 'center'}}>
            <View style={styles.button}>
                <LinearGradient style={{width: '100%', height: '100%', borderRadius: 30}} 
                colors={['#724eb2','#724eb2', '#8accf2']}>
                  <TouchableOpacity style={styles.touchable} onPress={() => {
                    props.updateState({viewActive:'ViewTwo',typeUser:'employer'})
                    }} 
                  >
                    <Text style={styles.textButton}>COLABORADORES</Text>
                  </TouchableOpacity>
                </LinearGradient>    
            </View> 
            <View style={styles.button}>
                <LinearGradient style={{width: '100%', height: '100%', borderRadius: 30}} 
                colors={['#724eb2','#724eb2', '#8accf2']}>
                  <TouchableOpacity style={styles.touchable} onPress={() => {
                      props.updateState({viewActive:'ViewTwo',typeUser:'employee'})
                    }} 
                  >
                    <Text style={styles.textButton}>OPORTUNIDADES</Text>
                  </TouchableOpacity>
                </LinearGradient>    
            </View> 
          </View>
      </View>              
    )
}

const styles = StyleSheet.create({
  touchable:{
      flex:1, 
      justifyContent:'center', 
      alignItems:'center'
  },
  button:{
      flex:.5,
      marginTop: 20,
      borderRadius:30,
      height:45,
      width:140,
      alignItems:'center',
      justifyContent: 'center',
      marginLeft:10, 
      marginRight:10
  },
  textButton:{
      color:'#FFFFFF'
  },
});

export default viewOne;