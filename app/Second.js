import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  Navigator,
  TouchableOpacity,
  TouchableHighlight,
  View
} from 'react-native';
//
//
// class Second extends Component {
//   render(){
//     return (
//       <View>
//         <Text>Second</Text>
//       </View>
//     );
//   }
// }
//
// AppRegistry.registerComponent('DateDetailsList', () => Second);

class Second extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.largeText}>
          We are going to navigate to this component from First.js
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dddfd4',
  },
  largeText: {
    flex: 1,
    fontSize: 52,
    fontFamily: "HelveticaNeue-CondensedBold",
    paddingTop: 40,
    paddingRight: 20,
    paddingLeft: 20,
    color: "#173e43"
  },
});

module.exports = Second;
