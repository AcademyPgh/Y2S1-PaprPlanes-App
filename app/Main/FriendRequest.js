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
import style from '../styles/style';
import CreateTextPost2 from '../Resources/createtextpost2.png';
import camera2 from '../Resources/camera2.png';
import link2 from '../Resources/link2.png';
import acceptFriend from '../Resources/acceptFriendGrn.png';
import declineFriend from '../Resources/declineFriendRed.png';
import mail from '../Resources/mail.png';
import password from '../Resources/password.png';


class FriendRequest extends React.Component {
    render(){
      return (
        <View>
          <View style = {style.FriendRequestBox}>
            <View>
              <Image source={declineFriend} style={style.DeclineIcon}/>
            </View>
            <View style = {style.RequesterBox}>
              <Text style = {style.RequesterName}>Requester Name</Text>
              <Text style = {style.FriendRequestText}>Friend Request</Text>
            </View>
          <View>
            <Image source={acceptFriend} style={style.AcceptIcon}/>
          </View>
        </View>
      </View>
      );
    }
  }


  export default FriendRequest;
