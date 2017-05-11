import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import Post from './Post'
import style from './style'
import FriendPass from './FriendPass'

class FriendPassList extends React.Component {
  static navigationOptions = {
    headerStyle:{ backgroundColor: '#FFA21F'},
    headerTitleStyle:{ color: '#FFF', fontFamily: 'Avenir'},
    title: 'Friends',
}
  render(){
    return (
        <ScrollView>
        {
        this.props.FriendList.map((item,index) => {
          return <FriendPass FriendList={item} key={index} toggle={this.props.toggle}/>
        })
      }
    </ScrollView>
    );
  }

}


export default FriendPassList;
