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

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { StackNavigator } from 'react-navigation';
import style from './style';

class CreateTextPost extends React.Component {
  render(){
  const { navigate } = this.props.navigation;

  const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent:'center',
      paddingTop: 25,


   },
      input1: {
      margin: 15,
      height: 40,
      borderColor: 'grey',
      borderWidth: 1,

   },
    input2: {
      margin: 15,
      height: 100,
      borderColor: 'grey',
      borderWidth: 1,
      marginBottom: 75,
   }

})
return (

  <View style = {styles.container}>

    <TextInput style = {styles.input1}
        placeholder = 'Caption'
        autoCapitalize = 'none'/>

    <TextInput style = {styles.input2}
      placeholder = 'Content'
      autoCapitalize = 'none' />
      <View>
      <TouchableOpacity onPress={() => { navigate('PostPassMain')}}><Text>Submit</Text></TouchableOpacity>
      </View>
  </View>




    );
  }

}

export default CreateTextPost;
