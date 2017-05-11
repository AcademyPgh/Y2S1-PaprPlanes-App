import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableHighlight,

} from 'react-native';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { StackNavigator } from 'react-navigation';
import style from './style';
import PlaneText from './PlaneText';
import {LogInText, textText} from './textText';
import Post2 from './Post2';

class ViewPost extends React.Component {
  render(){

const { navigate } = this.props.navigation;
const { params } = this.props.navigation.state;

return (
  <View style = {style.View3}>
    <TouchableHighlight onPress={() => {navigate('Main')} } >
        <View style = {style.PostLinkBoxSub}>

           <Text style = {style.SenderName}>{params.SenderName}</Text>
           <Text style = {style.CreatorName}>{params.AuthorName}</Text>
           <Text style = {style.CreatorName}>{params.Caption}</Text>
           <Text style = {style.CreatorName}>{params.Text}</Text>

        </View>
        

         </TouchableHighlight>
  </View>

    );
  }

}

export default ViewPost;
