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
import CreateTextPost2 from '../Resources/createtextpost2.png';

class Post extends React.Component {
  render(){
    return (
        <View style = {style.PostLinkBoxMain}>
               <View style = {style.PostLinkBoxSub}>
               <Text style = {style.SenderName}>{this.props.information.SenderName}</Text>
                <Text style = {style.CreatorName}>{this.props.information.AuthorName}</Text>
                </View>
                <View style = {style.PostIcon}>
                <Image source = {CreateTextPost2}/>
                </View>
      </View>
    );
  }

}


export default Post;
