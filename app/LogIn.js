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

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { StackNavigator } from 'react-navigation';
import style from './style';
import getUser from './getUser'
import PlaneText from './PlaneText';
import {LogInText, textText} from './textText';
import logo from '../Resources/logo-200.png';
import mail from '../Resources/mail.png';
import password from '../Resources/password.png';
import StackNavigation from './StackNavigator';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserData:getUser(),
      //backgroundColor: '#fff',
      currentEmail:"",
      currentPassword:"",

    };
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.onSwipeLeft = this.onSwipeLeft.bind(this);
    this.goLogin = this.goLogin.bind(this);

  }

  static navigationOptions = {
    title: 'LogIn',
}


goLogin(){

for(var i=0;i<this.state.UserData.length;i++)
   {

    if ((this.state.UserData[i].Email === this.state.currentEmail)&&(this.state.UserData[i].Password === this.state.currentPassword))
    {console.warn( "true login");
      return true;}
  }
  console.warn("false login");
  return false;

}

  changeEmail(email) {
      this.setState({
        currentEmail: email,
      })
    }

    changePassword(pass) {
      this.setState({
        currentPassword: pass,
      })
    }

  onSwipeLeft(gestureState) {
    const { navigate } = this.props.navigation;

    if (this.goLogin()){
     navigate('Main');
    }
    else{
      this.setState({backgroundColor: 'red'});
    }
    }


  render() {

    const config = {
     velocityThreshold: 0.3,
     directionalOffsetThreshold: 80
   };
//    //
  //   const styles = StyleSheet.create ({
  //  container: {
  //     flex: 1,
  //     alignItems: 'center',
  //     justifyContent:'center',
  //     paddingTop: 200
  //  },
//   //  input: {
//   //     margin: 15,
//   //     height: 40,
//   //     borderColor: 'grey',
//   //     borderWidth: 1
//   //  }
//
// })
    const { navigate } = this.props.navigation;
    return (
      <View style = {style.View2}>
      <View style = {style.LogIn2}>
        <PlaneText>Log In</PlaneText>
        </View>
        <Image style = {style.LogInLogo} source = {logo}/>
        <View style = {style.Email}>
        <View style = {style.container4}>
        <Image source = {mail}/>
        </View>
        <TextInput style = {style.TextField2} placeholder = '  Email: ' autoCapitalize = 'none'/>
        </View>
        <View style = {style.Email}>
        <View style = {style.container4}>
        <Image source = {password}/>
        </View>
        <TextInput style = {style.TextField2} placeholder = '  Password: ' autoCapitalize = 'none' />
          </View>
          <View style = {style.swipe}>
          <GestureRecognizer
                onSwipeLeft={(state) => this.onSwipeLeft(state)}
                config={config}
                >
                <LogInText>&#10094; Swipe to LogIn </LogInText>
              </GestureRecognizer>

            </View>
            </View>

    );
  }
}
export default LogIn;
