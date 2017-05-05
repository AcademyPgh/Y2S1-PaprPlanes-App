import React from 'react';
import {Text} from 'react-native';
import style from './style';

class textText extends React.Component {
  render (){
    return (<Text style = {style.textText}>{
      this.props.children
    }
    </Text>)
  }
}

export default textText;
