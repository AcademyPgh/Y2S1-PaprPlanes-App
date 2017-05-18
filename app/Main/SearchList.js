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

  render() {
    return(
      <ScrollView>
        {
        this.props.searchResults.map((item,index) => {
          return <SearchResult information={item} key={index} navigation={this.props.navigation}/>
        })
      }
    </ScrollView>

    )
  }
}
export default SearchList;
