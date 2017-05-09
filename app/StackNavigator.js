import React from 'react';
import style from './style';

class StackNavigator extends React.Component {
  render (){
    return (<StackNavigator style = {style.StackNavigator}>{
      this.props.children
    }
    </StackNavigator>)
  }
}

export default StackNavigator;
