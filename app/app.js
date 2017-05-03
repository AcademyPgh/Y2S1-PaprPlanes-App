import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { StackNavigator } from 'react-navigation';
import Main from './Main';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Greeting Screen',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>

        <Button onPress={() => { navigate('LogIn')}} title="LogIn"></Button>
        <Button onPress={() => { navigate('SignUp')}} title="SignUp"></Button>
      {/*test button will remove later*/}
        <Button onPress={() => { navigate('Main')}} title="Main Screen"></Button>
      </View>
    );
  }
}

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myText: 'hohoho',
      gestureName: 'none',
      backgroundColor: '#fff'
    };
  }
  static navigationOptions = {
    title: 'LogIn',
  }

  onSwipeLeft(gestureState) {
      this.setState({myText: 'You swiped left!'});
    }



    onSwipe(gestureName, gestureState) {
      const {SWIPE_LEFT} = swipeDirections;
      this.setState({gestureName: gestureName});
      switch (gestureName) {
        case SWIPE_LEFT:
          this.setState({backgroundColor: 'red'});
          break;
      }
    }






  render() {

    const config = {
     velocityThreshold: 0.3,
     directionalOffsetThreshold: 80
   };

    const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent:'center',
      paddingTop: 200
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: 'grey',
      borderWidth: 1
   }

})
    const { navigate } = this.props.navigation;
    return (
      <View style = {styles.container}>
        <Text>Log-In</Text>
        <TextInput
        style = {styles.input}
            placeholder = 'Email'
            autoCapitalize = 'none'
         />
         <TextInput
         style = {styles.input}
             placeholder = 'PassWord'
             autoCapitalize = 'none'
          />

          <GestureRecognizer
                onSwipe={(direction, state) => this.onSwipe(direction, state)}

                onSwipeLeft={(state) => this.onSwipeLeft(state)}

                config={config}
                style={{
                  flex: 1,
                  backgroundColor: this.state.backgroundColor
                }}
                >
                <Text>{this.state.myText}</Text>
                <Text>Swipe to LogIn: {this.state.gestureName}</Text>
              </GestureRecognizer>








        <Button onPress={() => { navigate('Home')}} title="< back"></Button>
      </View>
    );
  }
}

class SignUp extends React.Component {
  static navigationOptions = {
    title: 'SignUp',
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Sign-Up</Text>
        <Button onPress={() => { navigate('Home')}} title="Go back!"></Button>
      </View>
    );
  }
}

const PaprPlanes = StackNavigator({
  Home: { screen: HomeScreen },
  LogIn: {screen: LogIn },
  SignUp: {screen: SignUp },
  Main: {screen: Main }
});

AppRegistry.registerComponent('PaprPlanes', () => PaprPlanes);
