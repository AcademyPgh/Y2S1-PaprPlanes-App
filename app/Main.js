import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,

} from 'react-native';
import PostList from './PostList'
import CounterBar from './CounterBar'

class Main extends React.Component {
  render(){
    return (
        <View>
        <CounterBar/>
        <Button onPress={() => { navigate('LogIn')}} title="Picture"></Button>
        <Button onPress={() => { navigate('LogIn')}} title="URL Link"></Button>
        <Button onPress={() => { navigate('LogIn')}} title="Post"></Button>
        <PostList />
        </View>
    );
  }

}


export default Main;
