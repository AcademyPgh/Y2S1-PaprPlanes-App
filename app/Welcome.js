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
import { StackNavigator } from 'react-navigation';
import style from './style';
import PlaneText from './PlaneText';
import SignUp1 from './SignUp1';
import SignUp2 from './SignUp2';
import videoFPO from '../Resources/videoFPO.png';


import {LogInText, textText} from './textText';


class Welcome extends React.Component {
  static navigationOptions = {
    title: 'SignUp',
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = {style.VideoView}>
        <View style={style.Video}>
          <Image source={videoFPO}/>
        </View>
        <View style = {style.VideoView}>
          <PlaneText>Welcome to PaprPlane.</PlaneText>
          <Text style = {style.UserName}>Let's show you around.</Text>
        </View>
      </View>
    );
  }
}
export default Welcome;
