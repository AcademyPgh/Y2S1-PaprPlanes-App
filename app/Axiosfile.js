
import React, {Component} from 'react';
import axios from 'axios';
import {View,Text} from 'react-native';

export default class Axiosfile extends Component {
  constructor(props) {
    super(props);


    this.state = {
      users: [{},{}],
    };
    this.search = this.search.bind(this);
    this.search();
  }

  // actions
  search() {
    axios.get('http://localhost:3000/')
    .then(response => {
      const users = response.data.users.map((r, index) =>
        ({
          key: index,
          name: r.FullName,
        })
      );

      this.setState({
        users: users,
      });
    });
  }

  // render
  render() {
    return (
      <View>
        <Text>{this.state.users[1].name} </Text>
        <Text>{this.state.users[0].name} </Text>
      </View>
    );
  }
}
