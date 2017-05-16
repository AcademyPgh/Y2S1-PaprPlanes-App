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
} from 'react-native';
import style from '../styles/style';
import CreateTextPost2 from '../Resources/createtextpost2.png';
import camera2 from '../Resources/camera2.png';
import link2 from '../Resources/link2.png';





class SearchResult extends React.Component {

  constructor(props){
   super(props);


   }


render(){
    return (
<View>
    <View style = {style.PostLinkBoxMain}>

          <View style = {style.PostLinkBoxSub}>

              <Text style = {style.SenderName}></Text>
              <Text style = {style.CreatorName}></Text>

          </View>
    </View>

</View>


    );
  }

}
export default SearchResult;
