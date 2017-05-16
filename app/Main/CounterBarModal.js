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
import styles from '../styles/modalStyles';
import SearchModal from './SearchModal';
import Modal from 'react-native-modal'
import { BlurView } from 'react-native-blur';


class CounterBarModal extends React.Component {
  constructor(props){
   super(props);

   this.state={
     isModalVisible: false
   }
   this._showModal= this._showModal.bind(this);
   this._hideModal = this._hideModal.bind(this);
 }


 _showModal = () => this.setState({ isModalVisible: true })

 _hideModal = () => this.setState({ isModalVisible: false })


   render() {
     var modalBackgroundStyle = {
       backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff'};
     var innerContainerTransparentStyle = this.state.transparent
       ? {backgroundColor: '#fff', padding: 20}
       : null;

     return (

      <View>
        <TouchableOpacity onPress={this._showModal}>
          <Image source={profile} style = {style.ProfilePic}/>
        </TouchableOpacity>
        <Modal isVisible={this.state.isModalVisible}
              backdropOpacity = {0}
              animationIn = "slideInDown"
              animationInTiming = {100}
              animationOut = "slideOutUp"
              animationOutTiming = {100}
              backdropColor = "#373435">

              
          <BlurView blurType='light' blurAmount = {7} alignItems= 'stretch' style={{ flex: 1, marginTop: 65, marginBottom: 80, flexDirection: 'column', alignItems: 'stretch', }}>
            <SearchModal hideModal = {this._hideModal}/>
            <Text>HELOOO</Text>
          </BlurView>

        </Modal>
      </View>
     );
   }
  }
  export default CounterBarModal;
