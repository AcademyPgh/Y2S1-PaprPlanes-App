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

import style from './style';
import check from '../Resources/check.png';

class Search extends React.Component {
  render(){
    return (
      <View style = {style.SearchOne}>
        <View>
          <Image source={require('../Resources/mac&c.jpg')} style={style.ProfilePic}/>
        </View>
      <View style = {style.UserNameContainer}>
        <View style = {style.UserName}>
          <Text>User Name</Text>
        </View>
      </View>
      <View style={style.SearchTwo}>
      <View style={style.Search}>
        <Text style = {style.Search}>Search</Text>
      </View>
      <View>
        <Image source={check} style={style.SearchIcon}/>
      </View>
      </View>
    </View>
    );
  }
}


export default Search;
