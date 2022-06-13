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


import CallBackground from '../assets/Icons/callBackground.png';


export default function Incoming({navigation}) {




  const win = Dimensions.get('window');
  const {userInfo, isLoading, logout} = useContext(AuthContext);

  return (
    <View style={{display: 'flex'}}>
      <ImageBackground
        source={CallBackground}
        resizeMode="cover"
        style={{height: win.height, width: win.width}}>
     



          <Text>Incoming</Text>
    
      </ImageBackground>
    </View>
  );
}
