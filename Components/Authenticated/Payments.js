import React, {Component} from 'react';
import BraintreeDropIn from 'react-native-braintree-payments-drop-in';
import { View, Button} from 'react-native';

braintreePayment = (token) => {
  BraintreeDropIn.show({
      clientToken: token,
    })
    .then(result => console.log(result))
    .catch((error) => {
      if (error.code === 'USER_CANCELLATION') {
        // update your UI to handle cancellation
      } else {
        // update your UI to handle other errors
      }
  });
}

class Payment extends Component {
    
    render() {
    const { navigation } = this.props;
    const token = navigation.getParam('token');
    
    return (
      <View>
        <Button
        title="Pagar"
        onPress={() => {braintreePayment(token)}} 
        />
      </View>
    );
  }
}

export default Payment;


