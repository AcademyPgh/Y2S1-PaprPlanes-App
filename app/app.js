import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Home screen!</Text>
        <Button onPress={() => { navigate('Other')}} title="Go to the other!"></Button>
      </View>
    );
  }
}

class OtherScreen extends React.Component {
  static navigationOptions = {
    title: 'Other',
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Another screen!</Text>
        <Button onPress={() => { navigate('Home')}} title="Go back!"></Button>
      </View>
    );
  }
}

const PaprPlanes = StackNavigator({
  Home: { screen: HomeScreen },
  Other: {screen: OtherScreen },
});

AppRegistry.registerComponent('PaprPlanes', () => PaprPlanes);
