import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import style from './style';

import Check from '../Resources/check.png'
import unCheck from '../Resources/circle.png'



class MyCheckBox extends Component {


    render() {
        return (

            <TouchableWithoutFeedback onPress={() => {this.props.toggle(this.props.UserId)}}>

                    {this.props.isChecked ?
                         <Image style = {style.CheckIcon} source = {Check} />
                         :
                         <Image style = {style.CheckIcon} source = {unCheck}/>
                    }

            </TouchableWithoutFeedback>

        );
    }
}

export default MyCheckBox;
