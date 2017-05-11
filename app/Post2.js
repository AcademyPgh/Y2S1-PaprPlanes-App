import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import style from './style';
import CreateTextPost2 from '../Resources/createtextpost2.png';
import camera2 from '../Resources/camera2.png';
import link2 from '../Resources/link2.png';
import ModalDropdown from 'react-native-modal-dropdown';

class Post2 extends React.Component {

  constructor(props){
   super(props);

   this.chooseIcon = this.chooseIcon.bind(this);
   }

chooseIcon() {
  if (this.props.information.Type === 1) {
    return CreateTextPost2;
  }
  else if (this.props.information.Type === 0){
    return camera2;
  }
  else {
    return link2;
  }


}

  render(){
const {navigate} = this.props.navigation;
    return (
<View>


        <View style = {style.PostLinkBoxMain}>
          <TouchableHighlight onPress={() => {navigate('ViewPost', { information: this.props.information})} } >
              <View style = {style.PostLinkBoxSub}>

                 <Text style = {style.SenderName}>{this.props.information.SenderName}</Text>
                 <Text style = {style.CreatorName}>{this.props.information.AuthorName}</Text>

              </View>
              <View style = {style.PostIcon}>
                  <Image source = {this.chooseIcon()}/>
              </View>
              {/* <ViewPost information={this.props.information} navigate={navigate} /> */}
               </TouchableHighlight>
       </View>


</View>


    );
  }

}

export default Post2;
