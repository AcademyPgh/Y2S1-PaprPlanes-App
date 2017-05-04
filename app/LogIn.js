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


class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserData:getUser(),
      backgroundColor: '#fff',
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

    const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent:'center',
      paddingTop: 200
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: 'grey',
      borderWidth: 1
   }

})
    const { navigate } = this.props.navigation;
    return (
      <View style = {styles.container}>
        <Text>Log-In</Text>
        <TextInput emailvalue={this.state.currentEmail} onChangeText={this.changeEmail}
        style = {styles.input}
            placeholder = 'Email'
            autoCapitalize = 'none'
         />
         <TextInput passwordvalue={this.state.currentPassword} onChangeText={this.changePassword}
         style = {styles.input}
             placeholder = 'PassWord'
             autoCapitalize = 'none'
          />

          <GestureRecognizer

                onSwipeLeft={(state) => this.onSwipeLeft(state)}

                config={config}
                style={{
                  flex: 1,
                  backgroundColor: this.state.backgroundColor
                }}
                >
                <Text>Swipe to LogIn</Text>
              </GestureRecognizer>


        <Button onPress={() => { navigate('Home')}} title="< back"></Button>
      </View>
    );
  }
}
export default LogIn;
