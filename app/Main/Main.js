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
  ScrollView,

} from 'react-native';
import { StackNavigator } from 'react-navigation';
import PostList from './PostList';
import CounterBar from './CounterBar';
import getPost from '../getPost';
import style from '../styles/style';
import createtextpost2 from '../Resources/createtextpost2.png';
import camera2 from '../Resources/camera2.png';
import link2 from '../Resources/link2.png';
import FriendRequest from './FriendRequest';
import Search from './Search';
import OurCamera from '../CreatePost/OurCamera';
import MyCameraRoll from '../CreatePost/MyCameraRoll';
import CreatePicPost from '../CreatePost/CreatePicPost';
import SearchPage from './SearchPage';
import Welcome from '../SignUpLogIn/Welcome';
import CounterBarModal from './CounterBarModal';


class Main extends React.Component {
  constructor(props){
   super(props);

   this.state={
     PostData: getPost()
   }
 }

 static navigationOptions = {
   headerStyle:{ backgroundColor: '#373435', marginTop: 20},
   headerTitleStyle:{ color: '#FFF', fontFamily: 'Avenir'},
   backButtonTextStyle: { tintColor: '#FFF'},
 }
  render(){
    const { navigate } = this.props.navigation;
    return (
  <View style = {{flex: 1}} >
    <CounterBar navigation = {this.props.navigation}/>
      <View style={style.CreatePost}>
        <View style={style.LinkContainer}>
          <TouchableOpacity onPress={() => { navigate('CreateLinkPost')}} ><Image source ={link2}/></TouchableOpacity>
        </View>
        <View style={style.PicContainer}>
          <TouchableOpacity onPress={() => { navigate('CreatePicPost')}} ><Image source ={camera2}/></TouchableOpacity>
        </View>
        <View style={style.TextContainer}>
          <TouchableOpacity onPress={() => { navigate('CreateTextPost')}} ><Image source ={createtextpost2}/></TouchableOpacity>
        </View>
        </View>
        <ScrollView>
          <PostList  PostData={this.state.PostData} navigation = {this.props.navigation}/>
        </ScrollView>

        <FriendRequest/>


  </View>
    );
  }

}


export default Main;
{/* THIS WILL GOT BACK INTO RENDER WHEN WE ARE WORKING ON IT
  <View>
  <Button onPress={() => { navigate('SearchPage')}} title="SearchPage"></Button>
</View>
<View>
  <Button onPress={() => { navigate('Welcome')}} title="Welcome"></Button>
</View> */}
