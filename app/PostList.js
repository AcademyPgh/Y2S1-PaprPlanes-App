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
import Post from './Post'
import style from './style'

class PostList extends React.Component {
  render(){
    return (
        <View>
        {
        this.props.PostData.map((item,index) => {
          return <Post information={item} key={index} />
        })
      }
        </View>
    );
  }

}


export default PostList;
