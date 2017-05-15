import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import PostCount from '../getPost';
import TotalCount from '../getUser';
import style from '../styles/style';
import profile from '../Resources/profile.jpg';

class CounterBar extends React.Component {
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
    const { navigate } = this.props.navigation;
    return (
      <View style = {style.CounterBoxMain}>
      <View style = {style.LeftContainer}>
        <Text style = {style.CounterLeft}>1500</Text>
        </View>
        <TouchableOpacity onPress={() => { navigate('SearchPage')}}><Image source={profile} style={style.ProfilePic}/></TouchableOpacity>
      <View style = {style.RightContainer}>
        <Text style = {style.CounterRight}>42</Text>
        </View>
    </View>
    );
  }

}


export default CounterBar;
