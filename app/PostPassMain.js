import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity

} from 'react-native';
import { StackNavigator } from 'react-navigation'
import getPost from './getPost'
import getFriend from './getFriend'
import style from './style'
import FriendPassList from './FriendPassList'
import {PlaneText, PlaneText2, textText, LogInText} from './PlaneText';

class PostPassMain extends React.Component {
  static navigationOptions = {
    headerStyle:{ backgroundColor: '#FFA21F'},
    headerTitleStyle:{ color: '#FFF'},
    title: 'Friends',
}
  constructor(props){
   super(props);

   const idPassArray = [];
   const temp = getFriend();
   for (var i = 0; i < temp.length; i++)
   {
     temp[i].checked = false;
   }

   this.state={
     FriendList: temp

   }

   this.toggle = this.toggle.bind(this);
  }

  passPost(){
    for (var i = 0; i < this.state.FriendList.length; i++)
    {
      idPassArray.push (this.state.FriendList[i].UserId);
    }
    //ADD IN ABILITY TO PASS FRIEND IDS AND POST ID TO DATABASE

    navigate('Main')
  }

  toggle(id)
  {
    temp = this.state.FriendList;
    for (var i = 0; i < temp.length; i++)
    {
      if(temp[i].UserId === id)
      {
        temp[i].checked = !temp[i].checked;
      }
    }

    this.setState({FriendList: temp});
  }

  render(){
    const { navigate } = this.props.navigation;
    return (

<View>
    <FriendPassList FriendList = {this.state.FriendList} toggle={this.toggle} />
    <View style = {style.container}>
    <TouchableOpacity style = {style.SignUp2} onPress={() => {this.passPost()}}><LogInText>&#10094; Swipe To Send</LogInText></TouchableOpacity>
</View>
  </View>
    );
  }

}


export default PostPassMain;
