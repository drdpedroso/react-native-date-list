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


var First = require('./app/First');
var Second = require('./app/Second');
var Header = require('./app/Header');





class DatesListView extends Component {
  render() {
    return (
      <View>
        <Header />
        
        <Navigator
          initialRoute={{
            id: 'First'
          }}
          renderScene={this.navigatorRenderScene}
          />
       </View>
    );
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'First':
        return (<First navigator={navigator} title="first" />);
      case 'Second':
        return (<Second navigator={navigator} title="second" />);
    }
  }


 renderDate(date) {
   return (
       <TouchableOpacity>
         <View style={styles.container}>
                 <Text style={styles.date}>{date.date}</Text>
            <View style={styles.rightContainer}>
                 <Text style={styles.title}>{date.title}</Text>
                 <Text style={styles.description}>{date.description}</Text>
             </View>
         </View>
       </TouchableOpacity>
   );
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

AppRegistry.registerComponent('DateDetailsList', () => DatesListView);
