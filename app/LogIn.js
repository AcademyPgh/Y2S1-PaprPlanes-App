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
import {PlaneText, PlaneText2, textText, LogInText} from './PlaneText';
import logo from '../Resources/logo-200.png';
import mail from '../Resources/mail.png';
import password from '../Resources/password.png';
import mac from '../Resources/mac&c.jpg';

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
    headerStyle:{ backgroundColor: '#00CCFF'},
    headerTitleStyle:{ color: '#FFF', fontFamily: 'Avenir'},
    headerButtonStyle: {color: '#FFF'},
    title: 'Log In',
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
        <Image style = {style.LogInLogo} source = {logo}/>
        <View style = {style.Email}>
        <View style = {style.container4}>
        <Image source = {mail}/>
        </View>
        <TextInput emailvalue={this.state.currentEmail} onChangeText={this.changeEmail} style = {style.TextField2} placeholder ='Email: ' placeholderTextColor="#D6D6D6" autoCapitalize = 'none'/>
        </View>
        <View style = {style.Email}>
        <View style = {style.container4}>
        <Image source = {password}/>
        </View>
        <TextInput passwordvalue={this.state.currentPassword} onChangeText={this.changePassword} style = {style.TextField2} placeholder = 'Password: ' placeholderTextColor="#D6D6D6" autoCapitalize = 'none' />
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
