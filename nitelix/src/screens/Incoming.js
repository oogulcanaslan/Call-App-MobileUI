import React, {useRef, useContext} from 'react';

import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';
import JsSIP from 'jssip';
import Header from '../components/Header';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../context/AuthContext';
import AccountIcon from '../assets/Icons/accountIcon.png';
import HistoryIcon from '../assets/Icons/historyIcon.png';
import logoutIcon from '../assets/Icons/logoutIcon.png';
import MissedIcon from '../assets/Icons/missedIcon.png';
import Background from '../assets/Icons/background.png';




export default function Incoming({navigation}) {






// Create our JsSIP instance and run it:

var socket = new JsSIP.WebSocketInterface('wss://sip.myhost.com');
var configuration = {
  sockets  : [ socket ],
  uri      : 'sip:alice@example.com',
  password : 'superpassword'
};

var ua = new JsSIP.UA(configuration);

ua.start();

// Register callbacks to desired call events
var eventHandlers = {
  'progress': function(e) {
    console.log('call is in progress');
  },
  'failed': function(e) {
    console.log('call failed with cause: '+ e.data.cause);
  },
  'ended': function(e) {
    console.log('call ended with cause: '+ e.data.cause);
  },
  'confirmed': function(e) {
    console.log('call confirmed');
  }
};

var options = {
  'eventHandlers'    : eventHandlers,
  'mediaConstraints' : { 'audio': true, 'video': true }
};

var session = ua.call('sip:bob@example.com', options);




















  const win = Dimensions.get('window');
  const {userInfo, isLoading, logout} = useContext(AuthContext);

  return (
    <View style={{display: 'flex'}}>
      <ImageBackground
        source={Background}
        resizeMode="cover"
        style={{height: win.height, width: win.width}}>
     



          <Text>Incoming</Text>
    
      </ImageBackground>
    </View>
  );
}
