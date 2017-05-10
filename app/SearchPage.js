import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';

import PostCount from './getPost'
import TotalCount from './getUser'
import style from './style'
import Search from './Search'

class SearchPage extends React.Component {
  constructor(props){
   super(props);

   const posttemp = PostCount()
   const totaltemp = TotalCount()

   this.state={
     PostCount: posttemp,
     TotalCount: totaltemp
   }
 }

  render(){
    return (
    <View>
      <Search/>
    </View>
    );
  }

}

export default SearchPage;
