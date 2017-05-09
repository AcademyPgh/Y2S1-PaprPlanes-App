import React, { Component } from 'react';
import { View, StyleSheet,Text,TextInput} from 'react-native';
import { StackNavigator } from 'react-navigation';
import style from './style';


 class EnterHandle extends React.Component {


componentDidMount(){
  this.props.setLocked();
}


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
         <TextInput value={this.props.currentHandle} onChangeText={this.props.changeHandle}
         style = {styles.input}
             placeholder = 'Handle'
             autoCapitalize = 'none'
          />
          <Text>Swipe Left to Continue</Text>
     </View>

   );
 }
}
export default EnterHandle;
