import React from 'react';
import {Text} from 'react-native';
import style from './style';

export class textText extends React.Component {
  render (){
    return (<Text style = {style.textText}>{
      this.props.children
    }
    </Text>)
  }
}
export class LogInText extends React.Component {
  render (){
    return (<Text style = {style.LogInText}>{
      this.props.children
    }
    </Text>)
  }
}
