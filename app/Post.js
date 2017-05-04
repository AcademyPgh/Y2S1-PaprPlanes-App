import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

class Post extends React.Component {
  render(){
    return (
        <View >
               <Text>{this.props.information.Type}</Text>
                <Text>{this.props.information.AuthorName}</Text>
                <Text>{this.props.information.SenderName}</Text>
                <Text>-----------------------------</Text>
      </View>
    );
  }

}


export default Post;
