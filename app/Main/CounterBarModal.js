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
  Switch,
} from 'react-native';
import PostCount from '../getPost';
import style from '../styles/style';
import profile from '../Resources/profile.jpg';
import SearchModal from './SearchModal';
import Modal from 'react-native-modal'
import { BlurView } from 'react-native-blur';
import List from './SearchList';
import getUser from '../getUser'


class CounterBarModal extends React.Component {
  constructor(props){
   super(props);

   this.state={

     Users: getUser(),
     isModalVisible: false,
     SearchResults: [],
   }
   this._showModal = this._showModal.bind(this);
   this._hideModal = this._hideModal.bind(this);
   this._searchListDisplay = this._searchListDisplay.bind(this);

 }


 _showModal = () => this.setState({ isModalVisible: true })

 _hideModal = () => this.setState({ isModalVisible: false })



_searchListDisplay(string) {
  for(var i = 0; i<this.state.Users.size; i++){
    if (this.state.Users[i].Handle.includes(string) === true){

      this.state.SearchResults.push(this.state.Users[i]);

    }
  }
}


   render() {
     var modalBackgroundStyle = {
       backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff'};

     return (

      <View>
        <TouchableOpacity onPress = {this._showModal}>
          <Image source = {profile} style = {style.ProfilePic}/>
        </TouchableOpacity>
        <Modal isVisible = {this.state.isModalVisible}
              backdropOpacity = {0}
              animationIn = "slideInDown"
              animationInTiming = {100}
              animationOut = "slideOutUp"
              animationOutTiming = {100}
              backdropColor = "#373435"
              style = {{marginLeft: 0, marginRight: 0}}>


          <BlurView blurType ='light' blurAmount = {8} alignItems= 'stretch' style={{ flex: 1, marginTop: 65, marginBottom: 0, flexDirection: 'column', alignItems: 'stretch', }}>
            <SearchModal hideModal = {this._hideModal} search = {this._searchListDisplay} searchInput = {this.state.SearchInput}/>
            <List searchResults = {this.state.SearchResults}/>
          </BlurView>

        </Modal>
      </View>
     );
   }
  }
  export default CounterBarModal;
