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

import PostCount from '../getPost'
import TotalCount from '../getUser'
import style from '../styles/style';
import SearchBar from './SearchBar'

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
 static navigationOptions = {
   headerStyle:{ backgroundColor: '#373435', marginTop: 20},
   headerTitleStyle:{ color: '#FFF', fontFamily: 'Avenir'},
 }
  render(){
    return (
    <View>
      <SearchBar/>
    </View>
    );
  }

}

export default SearchPage;
