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
import CreateTextPost from './CreateTextPost'



class Main extends React.Component {
  render(){
    const { navigate } = this.props.navigation;
    return (
        <View>
        <CounterBar/>
        <Button onPress={() => { navigate('CreateTextPost')}} title="Picture"></Button>
        <Button onPress={() => { navigate('CreateTextPost')}} title="URL Link"></Button>
        <Button onPress={() => { navigate('CreateTextPost')}} title="Post"></Button>
        <PostList />
        </View>
    );
  }

}


export default Main;
