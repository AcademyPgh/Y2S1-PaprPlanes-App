import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import Users from '../getUser'



class SearchList extends React.Component {
  constructor(props){
   super(props);

   this.state={
     UserList: getUser()
   }
 }

  render() {
    return(
      <View>

      </View>

    )
  }
}
