import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  Image,
  Modal,
} from 'react-native';

import PostCount from '../getPost'
import TotalCount from '../getUser'
import style from '../styles/style';
import SearchBar from './SearchBar'

class SearchModal extends React.Component {
  constructor(props){
   super(props);

 }
 static navigationOptions = {
   headerStyle:{ backgroundColor: '#373435', marginTop: 20},
   headerTitleStyle:{ color: '#FFF', fontFamily: 'Avenir'},
 }
  render(){
    return (
    <View>
      <SearchBar hideModal = {this.props.hideModal} Sb={this.props.Sb} searchInput = {this.props.searchInput}/>
    </View>
    );
  }

}

export default SearchModal;
