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
import style from '../styles/style';


class PostList extends React.Component {
  render(){

    return (
        <View>
        {
        this.props.PostData.map((item,index) => {
          return <Post information={item} key={index} navigation={this.props.navigation}/>
        })
      }
    </View>
    );
  }

}


export default PostList;
