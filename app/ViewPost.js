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
  TouchableOpacity

} from 'react-native';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { StackNavigator } from 'react-navigation';
import style from './style';
import PlaneText from './PlaneText';
import {LogInText, textText} from './textText';
import Post2 from './Post2';

class ViewPost extends React.Component {
  constructor(props){
   super(props);
   const { params } = this.props.navigation.state;

   this.state = {
    PostInfo: params.info,
   }
 }
  render(){

const { navigate } = this.props.navigation;


return (
  <View style = {style.View3}>
    <TouchableOpacity onPress={() => {navigate('Main')} } >
        <View style = {style.PostLinkBoxSub}>

           <Text style = {style.SenderName}>{this.state.PostInfo.SenderName}</Text>
           <Text style = {style.CreatorName}>{this.state.PostInfo.AuthorName}</Text>
           <Text style = {style.CreatorName}>{this.state.PostInfo.Caption}</Text>
           <Text style = {style.CreatorName}>{this.state.PostInfo.Text}</Text>

        </View>


      </TouchableOpacity>
  </View>

    );
  }

}

export default ViewPost;
