import React from 'react';
import {
  StyleSheet,
} from 'react-native';


const modalStyles = StyleSheet.create ({
  container: {
      flex: 2,
      flexDirection: 'column',

      alignSelf: 'stretch'

    },
    innerContainer: {
      borderRadius: 30,
      alignItems: 'center',
    },
    row: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      marginBottom: 20,
    },
    rowTitle: {
      flex: 1,
      fontWeight: 'bold',
    },
    button: {
      borderRadius: 5,
      flex: 1,
      height: 44,
      alignSelf: 'stretch',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    buttonText: {
      fontSize: 18,
      margin: 5,
      textAlign: 'center',
    },
    modalButton: {
      marginTop: 10,
    },

});

export default modalStyles;
