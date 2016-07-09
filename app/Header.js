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



var MOCKED_DATA = [
  {title: 'Title', date: '6:45 AM', description: 'Descrição e tals'},
  {title: 'Title2', date: '7:45 AM', description: 'Descrição e tals2'},
  {title: 'Title3', date: '8:15 AM', description: 'Descrição e tals3'},
  {title: 'Title4', date: '9:00 AM', description: 'Descrição e tals4'},
  {title: 'Title5', date: '9:45 AM', description: 'Descrição e tals5'},
  {title: 'Title6', date: '1:15 PM', description: 'Descrição e tals7'},
];

class Header extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(MOCKED_DATA)
    };
  }

  render() {
    return (
      <View>
          <Text style={styles.header}>Bem Vindo!</Text>
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
    backgroundColor: '#FA001D',
    height: 90,
    fontSize: 25,
    color: '#FFFFFF',
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

module.exports = Header;
