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
import PlaneText from './PlaneText';
import {LogInText, textText} from './textText';
import Post2 from './Post2';

class ViewPost extends React.Component {
  render(){

const { navigate } = this.props.navigation;

return (
  <View style = {style.View3}>
    <TouchableHighlight onPress={() => {navigate('Main')} } >
        <View style = {style.PostLinkBoxSub}>

           <Text style = {style.SenderName}>{this.props.information.SenderName}</Text>
           <Text style = {style.CreatorName}>{this.props.information.AuthorName}</Text>
           <Text style = {style.CreatorName}>{this.props.information.Caption}</Text>
           <Text style = {style.CreatorName}>{this.props.information.Text}</Text>

        </View>
        <View style = {style.PostIcon}>
            <Image source = {this.chooseIcon()}/>
        </View>
        {/* <ViewPost information={this.props.information} navigate={navigate} /> */}
         </TouchableHighlight>
  </View>

    );
  }

}

export default ViewPost;
