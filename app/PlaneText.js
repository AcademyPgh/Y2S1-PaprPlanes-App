import React from 'react';
import {Text} from 'react-native';
import style from './style';

class PlaneText extends React.Component {
  render (){
    return (<Text style = {style.PlaneText}>{
      this.props.children
    }
    </Text>)
  }
}

export default PlaneText;
