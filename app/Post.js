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
  constructor(props){
   super(props);
   this.showIcon = this.showIcon.bind(this);
   }


  showIcon()
  { if (this.props.information.Type === 0)
     {return "this is picture";}
    else if (this.props.information.Type === 1) {
      return "this is Text";
    }
    else {return "this is URL";}
  }



  render(){
    return (
        <View >
               <Text>{this.showIcon()}</Text>
                <Text>{this.props.information.AuthorName}</Text>
                <Text>{this.props.information.SenderName}</Text>
                <Text>-----------------------------</Text>
      </View>
    );
  }

}


export default Post;
