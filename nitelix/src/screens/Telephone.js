import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ImageBackground,
  TextInput,
  Text,
  View,
  Button,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';

import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
const image = { uri: "https://reactjs.org/logo-og.png" };
const ButtonWrapper = styled.TouchableOpacity`
 margin: 4px;
  display: flex;
  background-color: aqua;
  height: 80px;
  width: 100px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const ButtonContainer = styled.View`
 margin: 2px;
 display: flex;
 flex-direction: column;
 align-items: center;
  
`;

const ButtonHorizontal = styled.View`
 
 display: flex;
 flex-direction: row;
  
`;

const ButtonTitle = styled.Text`
 
font-size: 25px;
  
`;
const ButtonSubTitle = styled.Text`
 
font-size: 15px;
  
`;

const PhoneInput = styled.Text`
font-size: 20px;

`;

const PhoneInputContainer = styled.View`
 

width: 100%;
display: flex;
height: 50px;
width: 80%;
margin: 15px;
background-color: yellow;
align-items:center;
justify-content: center;
border-radius: 10px;
  
`;

const CallButtonWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  background-color: aqua;
  height: 60px;
  width: auto;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  margin-top: 10px;
`;
const CallButtonTitle = styled.Text`

`;
const CallButtonSubTitle = styled.Text`
 
`;
const CallTitleWrapper = styled.View`
 display: flex;
 margin-left: 15px;
 justify-content: space-between;
`;
const CallButtonListWrapper = styled.View`
 display: flex;
 flex-direction: row;
`;




const PageContainer = styled.View`
background-color: white;
height: 100%;
margin-right:3px ;
margin-left:3px ;
border-radius: 30px;
`;





 
export default function Telephone() {

  //Telefon numarasının tutulduğu yer
   const [phoneText, setPhoneText] = React.useState("Telefon Numarası");

const win = Dimensions.get('window');

//Hangi tuşa basılırsa burası parametre alacak ve o telefon numarasını yazacak.Arama bölümü bittiğinde iki arama butonu için 
//onPress vererek arama ekranına yçnlendirme yapılacak.
 const onClickHandler=(numb)=>{
  phoneText != 'Telefon Numarası'
    ? setPhoneText(phoneText + numb)
    : setPhoneText(""+numb);
  
 }

    return (
      <View style={{display: 'flex'}}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={{height: win.height, width: win.width}}>
          <Header
            title="Telefon"
            subtitle="Numara tuşlayıp arama yapabilirsiniz"
            onPressBack={() => navigation.goBack()}
          />

          <PageContainer>
            <ButtonContainer>
              <PhoneInputContainer>
                <PhoneInput>{phoneText}</PhoneInput>
              </PhoneInputContainer>

              <ButtonHorizontal>
                <ButtonWrapper
                  onPress={() => {
                    onClickHandler(1);
                  }}>
                  <ButtonTitle>1</ButtonTitle>
                  <ButtonSubTitle> </ButtonSubTitle>
                </ButtonWrapper>

                <ButtonWrapper
                  onPress={() => {
                    onClickHandler(2);
                  }}>
                  <ButtonTitle>2</ButtonTitle>
                  <ButtonSubTitle>ABC </ButtonSubTitle>
                </ButtonWrapper>
                <ButtonWrapper
                  onPress={() => {
                    onClickHandler(3);
                  }}>
                  <ButtonTitle>3</ButtonTitle>
                  <ButtonSubTitle>DEF </ButtonSubTitle>
                </ButtonWrapper>
              </ButtonHorizontal>

              <ButtonHorizontal>
                <ButtonWrapper
                  onPress={() => {
                    onClickHandler(4);
                  }}>
                  <ButtonTitle>4</ButtonTitle>
                  <ButtonSubTitle>GHI </ButtonSubTitle>
                </ButtonWrapper>
                <ButtonWrapper
                  onPress={() => {
                    onClickHandler(5);
                  }}>
                  <ButtonTitle>5</ButtonTitle>
                  <ButtonSubTitle>JKL </ButtonSubTitle>
                </ButtonWrapper>
                <ButtonWrapper
                  onPress={() => {
                    onClickHandler(6);
                  }}>
                  <ButtonTitle>6</ButtonTitle>
                  <ButtonSubTitle>MNO </ButtonSubTitle>
                </ButtonWrapper>
              </ButtonHorizontal>
              <ButtonHorizontal>
                <ButtonWrapper
                  onPress={() => {
                    onClickHandler(7);
                  }}>
                  <ButtonTitle>7</ButtonTitle>
                  <ButtonSubTitle>PQRS </ButtonSubTitle>
                </ButtonWrapper>
                <ButtonWrapper
                  onPress={() => {
                    onClickHandler(8);
                  }}>
                  <ButtonTitle>8</ButtonTitle>
                  <ButtonSubTitle>TUV </ButtonSubTitle>
                </ButtonWrapper>
                <ButtonWrapper
                  onPress={() => {
                    onClickHandler(9);
                  }}>
                  <ButtonTitle>9</ButtonTitle>
                  <ButtonSubTitle>WXYZ </ButtonSubTitle>
                </ButtonWrapper>
              </ButtonHorizontal>

              <ButtonHorizontal>
                <ButtonWrapper onPress={onClickHandler}>
                  <ButtonTitle>*</ButtonTitle>
                  <ButtonSubTitle>, </ButtonSubTitle>
                </ButtonWrapper>
                <ButtonWrapper
                  onPress={() => {
                    onClickHandler(0);
                  }}>
                  <ButtonTitle>0</ButtonTitle>
                  <ButtonSubTitle>+ </ButtonSubTitle>
                </ButtonWrapper>
                <ButtonWrapper onPress={onClickHandler}>
                  <ButtonTitle>#</ButtonTitle>
                  <ButtonSubTitle></ButtonSubTitle>
                </ButtonWrapper>
              </ButtonHorizontal>

              <CallButtonListWrapper>
                <CallButtonWrapper>
                  <Icon name="phone" size={28} style={{marginLeft: 15}} />
                  <CallTitleWrapper>
                    <CallButtonSubTitle>Hat 1</CallButtonSubTitle>
                    <CallButtonTitle>0(216) 217 3232</CallButtonTitle>
                  </CallTitleWrapper>
                </CallButtonWrapper>

                <CallButtonWrapper>
                  <Icon name="phone" size={28} style={{marginLeft: 15}} />
                  <CallTitleWrapper>
                    <CallButtonSubTitle>Hat 2</CallButtonSubTitle>
                    <CallButtonTitle>0(216) 217 3232</CallButtonTitle>
                  </CallTitleWrapper>
                </CallButtonWrapper>
              </CallButtonListWrapper>
            </ButtonContainer>
          </PageContainer>
        </ImageBackground>
      </View>
    );
  
}


