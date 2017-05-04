import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,

} from 'react-native';
import { StackNavigator } from 'react-navigation'
import PostList from './PostList'
import CounterBar from './CounterBar'
import getPost from './getPost'




class Main extends React.Component {
  constructor(props){
   super(props);

   this.state={
     PostData: getPost()
   }
 }



  render(){
    const { navigate } = this.props.navigation;
    return (
        <View>
        <CounterBar/>
        <Button onPress={() => { navigate('CreatePicPost')}} title="Picture"></Button>
        <Button onPress={() => { navigate('CreateLinkPost')}} title="URL Link"></Button>
        <Button onPress={() => { navigate('CreateTextPost')}} title="Post"></Button>
        <PostList  PostData={this.state.PostData}/>
        </View>
    );
  }

}


export default Main;
