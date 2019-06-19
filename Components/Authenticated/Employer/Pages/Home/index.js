import React, { Component } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Button, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'

// demo purposes only
function * range (start, end) {
  for (let i = start; i <= end; i++) {
    yield i
  }
}

class Home extends Component {
  componentDidMount(){

  }
  constructor (props) {
    super(props)
    this.state = {
      cards:[
        {
        name:'Andres',
        lastname:'Ceballos'
        },
        {
          name:'Jose',
          lastname:'Martinez'
        },
      ],
      swipedAllCards: false,
      swipeDirection: '',
      cardIndex: 0
    }
  }

  renderCard = (card, index) => {
    return (
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
        <View style={styles.viewText}>
          <Text style={styles.text}>{card.name}</Text>
          <Text style={styles.text}>{card.lastname}</Text>
        </View>
      </View>
    )
  };

  onSwiped = (type, data) => {
    console.log('dataa',data)
    console.log(`on swiped ${type}`)
  }

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    })
  };

  swipeLeft = () => {
    this.swiper.swipeLeft()
  };

  render () {
    return (
      <View style={styles.container}>
        <Swiper
          ref={swiper => {
            this.swiper = swiper
          }}
          backgroundColor="#ffffff"
          marginTop={20}
          onSwiped={() => this.onSwiped('general')}
          onSwipedLeft={() => this.onSwiped('left')}
          onSwipedRight={(data) => this.onSwiped('right',data)}
          onSwipedTop={() => this.onSwiped('top')}
          onSwipedBottom={() => this.onSwiped('bottom')}
          onTapCard={this.swipeLeft}
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={80}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          stackSize={3}
          stackSeparation={15}
          overlayLabels={{
           /* bottom: {
              title: 'BLEAH',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }
            },*/
            left: {
              title: 'NO',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: -30
                }
              }
            },
            right: {
              title: 'INTERES',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: 30
                }
              }
            },
            /*top: {
              title: 'SUPER LIKE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }
            }*/
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard
        >
        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white'
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
    marginTop:20
  },  
  avatar: {
    paddingVertical: 30,
    width: 150,
    height: 150,
    borderRadius: 75
  },
  viewText: {
    flex:2,
  }
})

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)