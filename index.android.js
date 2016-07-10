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


var Home = require('./app/Home');
var Second = require('./app/Second');


class DatesListView extends Component {
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{
          id: 'Home'
        }}
        renderScene={this.navigatorRenderScene}
        configureScene={(route, routeStack) =>
          Navigator.SceneConfigs.FloatFromBottom}
        />
    );
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'Home':
        return (<Home navigator={navigator} title="home" />);
      case 'Second':
        return (<Second navigator={navigator} title="second" />);
    }
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
    backgroundColor: '#f2f2f2',
  },
});

AppRegistry.registerComponent('DateDetailsList', () => DatesListView);
