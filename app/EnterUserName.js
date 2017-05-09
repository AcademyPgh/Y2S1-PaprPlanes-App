import React, { Component } from 'react';
import { View, StyleSheet,Text,TextInput} from 'react-native';
import { StackNavigator } from 'react-navigation';
import style from './style';


 class EnterUserName extends React.Component {



 render() {
   const styles = StyleSheet.create ({
  input: {
     margin: 15,
     height: 40,
     borderColor: 'grey',
     borderWidth: 1,
  }
  })

   return (
     <View style = {style.tabtab}>
         <TextInput value={this.props.currentFullName} onChangeText={this.props.changeFullName}
         style = {styles.input}
             placeholder = 'Full Name'
             autoCapitalize = 'none'
          />
          <Text>Swipe Left to Continue</Text>
     </View>

   );
 }
}
export default EnterUserName;
