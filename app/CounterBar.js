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


class CounterBar extends React.Component {
  render(){
    return (
        <View>
<Text>left Counter </Text>
<Image source={require('../Resources/mac&c.jpg')} style={{ width: 50, height: 50 , borderRadius:20}}/>
<Text>Right Counter </Text>

        </View>
    );
  }

}


export default CounterBar;
