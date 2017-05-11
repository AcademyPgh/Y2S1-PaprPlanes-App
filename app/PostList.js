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
import Post2 from './Post2'
import style from './style'

class PostList extends React.Component {
  render(){
    return (
        <ScrollView>
        {
        this.props.PostData.map((item,index) => {
          return <Post2 information={item} key={index} navigation={navigate}/>
        })
      }
    </ScrollView>
    );
  }

}


export default PostList;
