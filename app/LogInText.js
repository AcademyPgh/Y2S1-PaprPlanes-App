import React from 'react';
import {Text} from 'react-native';
import style from './style';

class LogInText extends React.Component {
  render (){
    return (<Text style = {style.LogInText}>{
      this.props.children
    }
    </Text>)
  }
}

export default LogInText;
