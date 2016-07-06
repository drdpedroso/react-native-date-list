// 'use strict';
//
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   Image,
//   ListView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View
// } from 'react-native';
//

//
// class DateList extends React.Component {
//   render() {
//     return React.createElement(React.Text, {style: styles.text}, "Hello World!");
//   }
// }
//
//
// AppRegistry.registerComponent('DateList', () => DateList);
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  Navigator,
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

class DateDetailsList extends Component {
  render() {
    return (
      <View >
        <Text style={styles.header}>{this.props.title}</Text>
      </View>
    );
  }
}

class DatesListView extends Component {
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
        <DateDetailsList title="Group Fitness"/>
        <View style={{paddingTop: 22}}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderDate}
          />
        </View>
      </View>
    );
  }

 renderDate(date) {
   return (
       <TouchableHighlight>
         <View style={styles.container}>
                 <Text style={styles.date}>{date.date}</Text>
            <View style={styles.rightContainer}>
                 <Text style={styles.title}>{date.title}</Text>
                 <Text style={styles.description}>{date.description}</Text>
             </View>
         </View>
       </TouchableHighlight>
   );
 }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  rightContainer: {
    flex: 1,
  },
  header: {
    fontSize: 25,
    color: '#FFFFFF',
    backgroundColor: '#FA001D',
    height: 100,
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
  year: {
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
