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
import { StackNavigator } from 'react-navigation';
import style from './style';
import SignUp2 from './SignUp2';
import videoFPO2 from '../Resources/videoFPO2.jpg';
import arrowcontinue from '../Resources/arrowcontinue.png';
import {PlaneText, PlaneText2, textText, LogInText} from './PlaneText';
import Main from './Main';

class Welcome extends React.Component {

  static navigationOptions = {
    headerStyle:{ backgroundColor: '#373435', marginTop: 20},
    headerTitleStyle:{ color: '#FFF', fontFamily: 'Avenir'},
}
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = {style.VideoView}>
        <View style={style.Video}>
          <Image source={videoFPO2}/>
        </View>
        <View style = {style.welcomeTitle}>
          <PlaneText>Welcome to PaprPlane.</PlaneText>
          <Text style = {style.PlaneText3}>Let's show you around.</Text>
        </View>
        <View style = {style.welcomeContinue}>
          <TouchableOpacity onPress={() => { navigate('Main')}} ><Image source={arrowcontinue}/></TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Welcome;
