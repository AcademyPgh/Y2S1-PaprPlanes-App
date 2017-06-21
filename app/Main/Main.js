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
import SearchBar from './SearchBar';
import OurCamera from '../CreatePost/OurCamera';
import MyCameraRoll from '../CreatePost/MyCameraRoll';
import CreatePicPost from '../CreatePost/CreatePicPost';
import SearchPage from './SearchPage';
import Welcome from '../SignUpLogIn/Welcome';
import CounterBarModal from './CounterBarModal';
import axios from 'axios';



class Main extends React.Component {
  constructor(props){
   super(props);
   this.PostLoad();
   this.state={
     PostData: getPost(),
     User: [],
     PostList: [],
     RequestArray: [],
   }
   this.UserLoad = this.UserLoad.bind(this);
   this.PostLoad = this.PostLoad.bind(this);
   this.RequestLoad = this.RequestLoad.bind(this);
 }
UserLoad(){
      console.warn('hello' + global.UserID);
       axios.post('http://localhost:3000/userLoad/', {
         UserId: global.UserID
       })
       .then((response) => {

         this.setState({User: response.data});
       console.warn('this should work!!' + response.data);
       })
       .catch(function (error) {
         console.warn(error);
       });
     }

PostLoad(){
      axios.post('http://localhost:3000/postLoad/', {
          UserId: global.UserId
        })
        .then((response) => {
          //console.warn(response);
          this.setState({PostList: response});
        })
        .catch(function (error) {
          console.warn(error);
        });
    }
    
RequestLoad(){
      axios.post('http://localhost:3000/requestLoad/', {
          UserId: global.UserId
        })
            .then((response) => {
          //console.warn(response);
          this.setState({RequestArray: response});
        })
        .catch(function (error) {
          console.warn(error);
        });
    }


 static navigationOptions = {
   headerStyle:{ backgroundColor: '#373435', marginTop: 20},
   headerTitleStyle:{ color: '#FFF', fontFamily: 'Avenir'},
   backButtonTextStyle: { tintColor: '#FFF'},
 }
  render(){
    const  { navigate } = this.props.navigation;
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
          <PostList list = {this.state.PostList} navigation = {this.props.navigation}/>
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
