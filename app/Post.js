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
import camera2 from '../Resources/camera2.png';
import link2 from '../Resources/link2.png';


class Post extends React.Component {
  constructor(props){
   super(props);

   this.chooseIcon = this.chooseIcon.bind(this);
   }

chooseIcon() {
  if (this.props.information.Type === 1) {
    return CreateTextPost2;
  }
  else if (this.props.information.Type === 0){
    return camera2;
  }
  else {
    return link2;
  }


}

  render(){
    return (
        <View style = {style.PostLinkBoxMain}>
               <View style = {style.PostLinkBoxSub}>
               <Text style = {style.SenderName}>{this.props.information.SenderName}</Text>
                <Text style = {style.CreatorName}>{this.props.information.AuthorName}</Text>
                </View>
                <View style = {style.PostIcon}>
                <Image source = {this.chooseIcon()}/>
                </View>
       </View>
    );
  }

}

export default Post;
