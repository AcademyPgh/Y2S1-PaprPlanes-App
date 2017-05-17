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
  ScrollView,
} from 'react-native';

import Users from '../getUser'
import SearchResult from './SearchResult'



class SearchList extends React.Component {
  constructor(props){
   super(props);

   this.state={
     UserList: Users()
   }
 }

  render() {
    return(
      <ScrollView>
        {
        this.state.UserList.map((item,index) => {
          return <SearchResult information={item} key={index} navigation={this.props.navigation}/>
        })
      }
    </ScrollView>

    )
  }
}
export default SearchList;
