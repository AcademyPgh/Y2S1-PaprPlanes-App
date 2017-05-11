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
  TouchableHighlight,


 ScrollView,

 Dimensions

} from 'react-native';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { StackNavigator } from 'react-navigation';
import style from './style';
import PlaneText from './PlaneText';
import {LogInText, textText} from './textText';
i
import Slider from 'react-native-slider';

var screen = Dimensions.get('window');

const PostModal=(props)=> {
    return (<Modal
          animationType={'slide'}
          transparent={false}
          visible={props.gameModalVisible}
          onRequestClose ={() => props.setModalVisible(props)}>
          <View style= {styles.gameModalContainer}>
            <Text style={styles.modaltitle}>{props.gameModalTitle}</Text>
             <Text style ={styles.gameModalItem}>Location: {props.gameModalLocation}</Text>
            <Text style={styles.gameModalItem}>Release Date: {props.gameModalReleaseDate}</Text>
            <Text style ={styles.gameModalItem}>Developer: {props.gameModalDeveloper}</Text>
            <Text style ={styles.gameModalItem}>Genre: {props.gameModalGenre}</Text>
            <Text style ={styles.gameModalItem}>Number of Players: {props.gameModalPlayers}</Text>
            <ScrollView>
            <Text style = {styles.modaldescription}>{props.gameModalOverview}</Text>
          </ScrollView>
            <View style ={styles.center}>
            <TouchableHighlight underlayColor="#ffffff" onPress={() => {
              props.setModalVisible(props);
            }}>
              <View><CloseIcon/></View>
            </TouchableHighlight>
          </View>
          </View>
        </Modal>

    )}

    export default PostModal;
