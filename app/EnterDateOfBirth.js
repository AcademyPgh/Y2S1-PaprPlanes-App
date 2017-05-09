import React, { Component } from 'react';
import { View, StyleSheet,Text,TextInput,Button} from 'react-native';
import style from './style';



 class EnterDateOfBirth extends React.Component {

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
const { navigate } = this.props.navigation;
   return (
     <View style = {style.tabtab}>
         <TextInput value={this.props.currentDateOfBirth} onChangeText={this.props.changeDateOfBirth}
         style = {styles.input}
             placeholder = 'Date of Birth'
             autoCapitalize = 'none'
          />
          <Button onPress={() => { navigate('Main')}} title='SUBMIT'></Button>
     </View>

   );
 }
}
export default EnterDateOfBirth;
