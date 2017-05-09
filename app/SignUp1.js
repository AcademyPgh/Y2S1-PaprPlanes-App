import React, { Component } from 'react';
import { View, StyleSheet,Text,TextInput } from 'react-native';
import { TabViewAnimated, TabViewPage, TabBarTop } from 'react-native-tab-view';
import AnimatedTabs  from 'react-native-animated-tabs';
import { StackNavigator } from 'react-navigation';
import style from './style';


 class SignUp1 extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       currentFullName:"",
       currentHandle:"",
       currentEmail:"",
       currentPassword:"",
       currentDateOfBirth:"",

     };
     this.changeFullName = this.changeFullName.bind(this);
     this.changeHandle = this.changeHandle.bind(this);
     this.changeEmail=this.changeEmail.bind(this);
     this.changePassword=this.changePassword.bind(this);
     this.changeDateOfBirth=this.changeDateOfBirth.bind(this);

   }
   static navigationOptions = {
     title: 'SignUp1',
   }
   changePassword(Password) {
       this.setState({
         currentPassword: Password,
       })
     }

   changeFullName(fullName) {
       this.setState({
         currentFullName: fullName,
       })
     }

     changeHandle(handle){
       this.setState({
         currentHandle: handle,
       })
     }

     changeEmail(email){
       this.setState({
         currentEmail: email,
       })
     }

     changeDateOfBirth(dob){
       this.setState({
         currentDateOfBirth: dob,
       })
     }

 render() {
   const styles = StyleSheet.create ({
  input: {
     margin: 15,
     height: 40,
     borderColor: 'grey',
     borderWidth: 1
  }

})
   const { navigate } = this.props.navigation;
   return (
     <AnimatedTabs>
         <View style = {style.tabtab}>
             <TextInput value={this.state.currentFullName} onChangeText={this.changeFullName}
             style = {styles.input}
                 placeholder = 'Full Name'
                 autoCapitalize = 'none'
              />
              <Text>Swipe Left to Continue</Text>
         </View>

         <View style = {style.tabtab}>
         <TextInput value={this.state.currentHandle} onChangeText={this.changeHandle}
         style = {styles.input}
             placeholder = 'Handle'
             autoCapitalize = 'none'
          />
          <Text>Swipe Left to Continue</Text>
         </View>

         <View style = {style.tabtab}>
         <TextInput value={this.state.currentEmail} onChangeText={this.changeEmail}
         style = {styles.input}
             placeholder = 'Email'
             autoCapitalize = 'none'
          />
          <Text>Swipe Left to Continue</Text>
         </View>

         <View style = {style.tabtab}>
         <TextInput value={this.state.currentPassword} onChangeText={this.changePassword}
         style = {styles.input}
             placeholder = 'PassWord'
             autoCapitalize = 'none'
          />
          <Text>Swipe Left to Continue</Text>
         </View>

         <View style = {style.tabtab} >
         <TextInput value={this.state.currentDateOfBirth} onChangeText={this.changeDateOfBirth}
         style = {styles.input}
             placeholder = 'Date Of Birth'
             autoCapitalize = 'none'
          />
          <Text>Swipe Left to Continue </Text>
         </View>

     </AnimatedTabs>
   );
 }
}
export default SignUp1;
