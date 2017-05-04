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

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { StackNavigator } from 'react-navigation';
import style from './style';

class CreateTextPost extends React.Component {
  render(){
    return (
        <View>
        <Text>TEXT POST</Text>
        </View>
    );
  }

}

export default CreateTextPost;
