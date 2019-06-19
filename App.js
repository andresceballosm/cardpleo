import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { connect, Provider } from 'react-redux';
import Selection from './Components/Selection';
import { authentication } from './Store/Services/Firebase';
import { ActionLogout } from './Store/Actions/ActionLogout';
import { ActionLoadComplete } from './Store/Actions/ActionApp';
import { LoadingSmall } from './Components/Utils/LoadingSmall';
import Store from './Store/Store';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={Store}>
            <Selection/>
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
