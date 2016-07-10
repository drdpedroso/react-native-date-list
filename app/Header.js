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


class Header extends Component {
  render() {
    return (
      <View>
          <Text style={styles.header}>{this.props.title}</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: '#f2f2f2',
  },
  header: {
    backgroundColor: '#FA001D',
    height: 90,
    fontSize: 25,
    color: '#FFFFFF',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = Header;
