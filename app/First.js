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

class First extends Component {
  onButtonPress(){
    this.props.navigator.push({
      id: 'Second'
    });
  }

  // Initialize the hardcoded data
  // constructor(props) {
  //   super(props);
  //   const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  //   this.state = {
  //     dataSource: ds.cloneWithRows(MOCKED_DATA)
  //   };
  // }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
          <Text>Bem Vindo</Text>
        </TouchableOpacity>
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
  rightContainer: {
    marginRight: 30,
    flex: 1,
  },
  header: {
    fontSize: 25,
    color: '#FFFFFF',
    backgroundColor: '#FA001D',
    height: 90,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  title: {
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description:{
    fontSize: 12,
    marginBottom: 5,
    textAlign: 'center',
  },
  date: {
    marginLeft:10,
    color: '#FA001D',
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

module.exports = First;
