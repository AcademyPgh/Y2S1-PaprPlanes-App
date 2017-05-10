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

import style from './style';
import search from '../Resources/search.png';

class Search extends React.Component {
  render(){
    return (
      <View style = {style.SearchOne}>
        <View>
          <Image style={style.ProfilePic}/>
        </View>
      <View style = {style.UserNameContainer}>
          <Text style = {style.UserName}>User Name</Text>
      </View>
      <View style={style.SearchTwo}>
      <View style={style.SearchThree}>
        <TextInput style = {style.SearchText} placeholder = 'Search' placeholderTextColor = '#D6D6D6' autoCapitalize = 'none' ></TextInput>
      </View>
        <TouchableOpacity onPress={() => { navigate('')}} ><Image source={search} style={style.SearchIcon}/></TouchableOpacity>
      </View>
    </View>
    );
  }
}


export default Search;
