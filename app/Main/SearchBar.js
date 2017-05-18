import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import style from '../styles/style';
import search from '../Resources/search.png';
import profile from '../Resources/profile.jpg';

class SearchBar extends React.Component {
  constructor(props){
   super(props);
   this.state={
     isModalVisible: false,
     SearchInput: ''
   }
    this.handleSearchBarDisplay = this.handleSearchBarDisplay.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
 }

handleSearchBarDisplay= (e) => {
     this.setState({SearchInput: e.target.value});

   }

 handleSearchClick() {
    () => {this.props.search._searchListDisplay(this.state.SearchInput)};
    console.warn(this.state.SearchInput);
    this.setState({SearchInput: ''});

  }



  render(){
    return (
      <View style = {{
        flex: 0,
        flexDirection: 'row',
        backgroundColor: '#373435',
        alignItems: 'stretch',
      }}>

        <View style = {style.SearchOne}>
          <TouchableOpacity onPress={() => {this.props.hideModal()}}><Image source={profile} style = {style.ProfilePic}/></TouchableOpacity>
          <View style={style.SearchTwo}>
          <View style={style.SearchThree}>
            <TextInput style = {style.SearchText} value = {this.state.SearchInput} onChange = {this.handleSearchBarDisplay} placeholder = 'Search' placeholderTextColor = '#D6D6D6' autoCapitalize = 'none' ></TextInput>
          </View>
            <TouchableOpacity onPress = {() => {this.handleSearchClick()} }><Image source = {search}  style = {style.SearchIcon}/></TouchableOpacity>
          </View>
        </View>
      </View>

    );
  }
}


export default SearchBar;
