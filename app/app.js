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


import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { StackNavigator } from 'react-navigation';
import Main from './Main/Main';
import SignUp from './SignUpLogIn/SignUp';
import LogIn from './SignUpLogIn/LogIn';
import SearchPage from './Main/SearchPage';
import Welcome from './SignUpLogIn/Welcome';
import CreateTextPost from './CreatePost/CreateTextPost';
import CreateLinkPost from './CreatePost/CreateLinkPost';
import CreatePicPost from './CreatePost/CreatePicPost';
import style from './styles/style';
import logo from './Resources/logo-200.png';
import {PlaneText, PlaneText2, textText, LogInText} from './styles/PlaneText';
import SignUp2 from './SignUpLogIn/SignUp2';
import OurCamera from './CreatePost/OurCamera';
import MyCameraRoll from './CreatePost/MyCameraRoll';
import PostPassMain from './PostPass/PostPassMain';
import mail from './Resources/mail.png';
import password from './Resources/password.png';
import Post from './Main/Post'
import ViewPost from './PostPass/ViewPost'


class HomeScreen extends React.Component {
  static navigationOptions = {
    headerStyle:{ backgroundColor: '#373435', marginTop: 20},
    headerTitleStyle:{ color: '#FFF'},
  };

  render() {
    const { navigate } = this.props.navigation;
    return (

    <View style = {style.View}>
      <View style = {style.Pic}>
      <Image source = {logo}/>
      <PlaneText>PaprPlane</PlaneText>
      </View>
        <View style = {style.container}>
        <View style = {style.SignUp}>
        <TouchableOpacity onPress={() => { navigate('SignUp2')}} ><PlaneText>Sign Up</PlaneText></TouchableOpacity>
        </View>
      <View style = {style.LogIn}>
      <TouchableOpacity onPress={() => { navigate('LogIn')}} ><PlaneText>Log In</PlaneText></TouchableOpacity>
        </View>
      {/*test button will remove later*/}
      <View>
        <Button onPress={() => { navigate('Main')}} title="Main"></Button>
        </View>
        </View>
    </View>

    );
  }
}

const PaprPlanes = StackNavigator({
  Home: { screen: HomeScreen },
  LogIn: {screen: LogIn },
  SignUp: {screen: SignUp },
  Main: {screen: Main },
  CreateTextPost: { screen: CreateTextPost },
  CreateLinkPost: { screen: CreateLinkPost },
  CreatePicPost: { screen: CreatePicPost },
  PlaneText: {screen: PlaneText},
  PlaneText2: {screen: PlaneText2},
  textText: {screen: textText},
  LogInText: {screen: LogInText},
  SignUp2: { screen: SignUp2 },
  OurCamera:{screen:OurCamera},
  MyCameraRoll:{screen:MyCameraRoll},
  PostPassMain: { screen: PostPassMain },
  SearchPage: { screen: SearchPage },
  Welcome: { screen: Welcome },
  Post: {screen: Post},
  ViewPost: {screen: ViewPost}
});

AppRegistry.registerComponent('PaprPlanes', () => PaprPlanes);
