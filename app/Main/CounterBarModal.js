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
import style from '../styles/style';
import profile from '../Resources/profile.jpg';

class CounterBarModal extends React.Component {
  constructor(props){
   super(props);
   const posttemp = PostCount()

   this.state={
     PostCount: posttemp,
   }
    this.totalCounter= this.totalCounter.bind(this);
    this.rightCounter= this.rightCounter.bind(this);
 }
 totalCounter(){
   let sum = 0;
   for(var i = 0; i<this.state.PostCount.length; i++)
   {
     if (this.state.PostCount[i].UserId === global.userId)
     {
       sum = sum + this.state.PostCount[i].RightCounter;
     }
   }
   return sum;
 }

 rightCounter(){
   for(var i = 0; i<this.state.PostCount.length; i++)
   {
     if (this.state.PostCount[i].CurrentPost === true)
     {
       return this.state.PostCount[i].RightCounter;
     }
   }
 }


  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style = {style.CounterBoxMain}>
      <View style = {style.LeftContainer}>
        <Text style = {style.CounterLeft}>{this.totalCounter()}</Text>
        </View>
        
      <View style = {style.RightContainer}>
        <Text style = {style.CounterRight}>{this.rightCounter()}</Text>
        </View>
    </View>
    );
  }

}


export default CounterBarModal;
