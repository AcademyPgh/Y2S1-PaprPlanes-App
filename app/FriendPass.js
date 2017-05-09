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
} from 'react-native';
import style from './style';
import MyCheckBox from './MyCheckBox';





class FriendPass extends React.Component {

  render(){
    return (
        <View style = {style.FriendBoxMain}>

            <Text style = {style.FriendPass}>{this.props.FriendList.Name}</Text>
              <View style ={style.CheckIcon}>
                <MyCheckBox isChecked={this.props.FriendList.checked} UserId={this.props.FriendList.UserId} toggle={this.props.toggle} />
            </View>

       </View>
    );
  }

}

export default FriendPass;
