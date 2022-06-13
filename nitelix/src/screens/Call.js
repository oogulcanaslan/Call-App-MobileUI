import React, {useRef, useContext} from 'react';

import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
} from 'react-native';
import Header from '../components/Header';
import {AuthContext} from '../context/AuthContext';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';



import KeyboardIcon from '../assets/Icons/tusTakimi.png';
import TransferIcon from '../assets/Icons/transferIcon.png';
import WaitIcon from '../assets/Icons/bekletIcon.png';
import MicrofonIcon from '../assets/Icons/microfonIcon.png';
import CallProfileIcon from '../assets/Icons/callProfileIcon.png';
import CallBackground from '../assets/Icons/callBackground.png';
import CallCloseIcon from '../assets/Icons/callCloseIcon.png';





const PageContainer = styled.View`
  background-color: white;
  height: 100%;
  margin-right: 3px;
  margin-left: 3px;
  border-radius: 30px;
`;

const ProfileImageWrapper = styled.View`
  display: flex;
  align-items:center;
  margin-top:25%;
`;

const ProfileImage = styled.Image`


`;
const NameText = styled.Text`
  margin-top: 18px;
  font-size: 25px;
  font-weight: bold;
`;
const TimeText = styled.Text`
  margin-top: 8px;
  font-size: 40px;
  font-weight:bold;
`;

const ButtonWrapper = styled.View`
display: flex;
align-items:center;
margin-top:20px;
`;

const ButtonRowWrapper = styled.View`
display: flex;
flex-direction: row;

`;

const CloseWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top:20px;
`;

const PerButton = styled.TouchableOpacity`
display: flex;
align-items:center;
margin: 35px;
`;

const PerButtonImage = styled.Image`
`;

const CloseImage = styled.Image`



`;





const PerButtonText = styled.Text`
margin-top:15px;
color:white;
`;


export default function Call({navigation}) {
  const win = Dimensions.get('window');
  const {userInfo, isLoading, logout} = useContext(AuthContext);

  return (
    <View style={{display: 'flex'}}>
      <ImageBackground
        source={CallBackground}
        resizeMode="cover"
        style={{height: win.height, width: win.width}}>
        <ProfileImageWrapper>
          <ProfileImage source={CallProfileIcon} />
          <NameText>ALİ MERT</NameText>
          <TimeText>00:30</TimeText>
        </ProfileImageWrapper>

        <ButtonWrapper>
          <ButtonRowWrapper>
            <PerButton>
              <PerButtonImage source={MicrofonIcon} />
              <PerButtonText>Mik.Kapalı</PerButtonText>
            </PerButton>
            <PerButton>
              <PerButtonImage source={WaitIcon} />
              <PerButtonText>Beklet</PerButtonText>
            </PerButton>
          </ButtonRowWrapper>
          <ButtonRowWrapper>
            <PerButton onPress={() => navigation.navigate('Transfer')}>
              <PerButtonImage source={TransferIcon} />
              <PerButtonText>Transfer</PerButtonText>
            </PerButton>
            <PerButton onPress={() => navigation.navigate('Dial')}>
              <PerButtonImage source={KeyboardIcon} />
              <PerButtonText>Tuş Takımı</PerButtonText>
            </PerButton>
          </ButtonRowWrapper>
        </ButtonWrapper>
        <CloseWrapper>

               <CloseImage source={CallCloseIcon}></CloseImage>
        </CloseWrapper>
   
      </ImageBackground>
    </View>
  );
}
