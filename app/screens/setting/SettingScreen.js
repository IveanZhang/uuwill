import React from 'react';
import {WebView} from 'react-native';


export default class SettingScreen extends React.Component {
  static navigationOptions = {
    title: '优惠'.toUpperCase(),
  }; 

  render(){
    return (
      <WebView
        source={{uri: 'https://h5.eqxiu.com/ls/GzHMMY7C'}}
        style={{marginTop: 20}}
      />
    );
  }
} 