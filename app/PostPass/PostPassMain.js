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
import { StackNavigator } from 'react-navigation';
import style from '../styles/style';
import FriendPassList from './FriendPassList';
import backarrow from '../Resources/backarrow.png';
import closeIcon from '../Resources/closeIcon.png';
import swipeArrow from '../Resources/swipeArrow.png';
import getPost from '../getPost';
import getFriend from '../getFriend';
import getPostAccess from '../getPostAccess';
import {PlaneText, PlaneText2, textText, LogInText} from '../styles/PlaneText';

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
     FriendList: temp,
   }
   this.passPost = this.passPost.bind(this);
   this.toggle = this.toggle.bind(this);
  }

  passPost(){
    const { params } = this.props.navigation.state;
    const PassObject = {
    userId: global.userId,
    PostInfo: params.postInfo,
    idPassArray: [],
  }
    for (var i = 0; i < this.state.FriendList.length; i++)
    {
      if(this.state.FriendList[i].checked == true)
      {
      PassObject.idPassArray.push (this.state.FriendList[i].FriendId);
      }
    }
    console.log(PassObject.PostInfo);
    console.warn(PassObject.idPassArray);
    console.warn(global.userId);
    //ADD IN ABILITY TO PASS FRIEND IDS AND POST ID TO DATABASE
    return PassObject
    navigate('Main')
  }

  toggle(id)
  {
    temp = this.state.FriendList;
    for (var i = 0; i < temp.length; i++)
    {
      if(temp[i].FriendId === id)
      {
        temp[i].checked = !temp[i].checked;
      }
    }

    this.setState({FriendList: temp});
  }
//{this.passPost().PostInfo.currentCaption} USE THIS TO CALL THE POST OBJECT
  render(){
    const { navigate } = this.props.navigation;
    return (
  <View style = {style.FriendView}>
    <FriendPassList FriendList = {this.state.FriendList} toggle={this.toggle} />
    <View style = {style.container}>
    <TouchableOpacity style = {style.SignUp2} onPress={() => {this.passPost()}}><LogInText>Press to Send &#10095; </LogInText></TouchableOpacity>
    </View>
  </View>
    );
  }
}


export default PostPassMain;
