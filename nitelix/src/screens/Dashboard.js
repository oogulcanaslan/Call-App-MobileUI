import React from 'react';
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ImageBackground,
  Text,
  Image,
  View,
} from 'react-native';
import Header from '../components/Header';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import redIcon from '../assets/Icons/redTelIcon.png'
import greenTelIcon from '../assets/Icons/greenTelIcon.png';
import greyTelIcon from '../assets/Icons/greyTelIcon.png';
import blueTelIcon from '../assets/Icons/blueTelIcon.png';
import orangeTelIcon from '../assets/Icons/orangeTelIcon.png';
import lightIcon from '../assets/Icons/lightIcon.png';
import clockGreen from '../assets/Icons/clockGreen.png';
import clockRed from '../assets/Icons/clockRed.png';
import clockBlue from '../assets/Icons/clockBlue.png';
import lightIcon2 from '../assets/Icons/lightIcon2.png';
import userIcon from '../assets/Icons/userIcon.png';

import Background from '../assets/Icons/background.png';


export default function Dashboard() {

  const PageContainer = styled.View`
background-color: white;
height: 100%;
margin-right:3px ;
margin-left:3px ;
border-radius: 30px;
`;

const DashboardContainer = styled.View`
  margin-top: 10px;
  margin-right: 18px;
  margin-left: 18px;
`;

const DashboardTopItem = styled.View`
display:flex;
flex-direction: row;
align-items: center;
margin-top: 10px;
`;

const DashboardText = styled.Text`
margin-left: 10px;

`;

const Card = styled.View`
  
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  height: 70px;
  margin-top: 10px;
  width: 165px;
  
  
`;

const CardTitle = styled.Text`
  margin-left: 10px;
`;
const CardDesc = styled.Text`
  margin-left: 10px;
`;

const CallTimeTitle = styled.Text`
  color: black;
  margin-top: 20px;
  font-size: 15px;
  font-weight: bold;
  
`;
const CallTimeCardTitle = styled.Text`
  color: black;
  margin-left: 8px;
`;
const CallTimeDesc = styled.Text`
  font-size: 10px;
  color: black;
`;
const CardRightContainer = styled.View`
 
 
`;

const CardLeftContainer = styled.View`
 margin-right: 20px;

 
`;
const CardListWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
`;

const CallTimeCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: 'rgba(243,243,243,1.00)';
  padding: 10px;
  border-radius: 8px;
  margin-top: 8px;
`;



const win = Dimensions.get('window');
  
    return (
      <View style={{display: 'flex'}}>
        <ImageBackground
          source={Background}
          resizeMode="cover"
          
          style={{height: win.height, width: win.width}}>
          <Header
            title="İŞNET"
            subtitle="Volkan ASLAN (1001)"
            onPressBack={() => navigation.goBack()}
            iconColor="white"
            iconBackgroundColor="#1E3C72"
            iconName={userIcon}
          />
          <SafeAreaView style={{flex: 1}}>
            <PageContainer>
              <DashboardContainer>
                <DashboardTopItem>
                  <Image source={lightIcon} />
                  <DashboardText>Santral bağlantısı kuruldu</DashboardText>
                </DashboardTopItem>
                <DashboardTopItem>
                  <Image source={lightIcon2} />
                  <DashboardText>
                    Bugünkü arama oranınız{' '}
                    <Text style={{fontWeight: 'bold'}}>%88.99</Text>'dir.
                  </DashboardText>
                </DashboardTopItem>
                <DashboardTopItem>
                  <Image source={lightIcon2} />
                  <DashboardText>
                    Cevapsız çağrı sayınız{' '}
                    <Text style={{fontWeight: 'bold'}}>4</Text> aramadır.
                  </DashboardText>
                </DashboardTopItem>

                <CardListWrapper>
                  <Card style={{backgroundColor: 'rgba(81,89,101,0.5)'}}>
                    <CardLeftContainer>
                      <CardTitle style={{color: 'rgba(1,1,1,0.6)'}}>
                        Toplam Çağrı
                      </CardTitle>
                      <CardDesc
                        style={{
                          color: 'rgba(1,1,1,0.6)',
                          fontWeight: 'bold',
                        }}>
                        78 Arama
                      </CardDesc>
                    </CardLeftContainer>
                    <CardRightContainer>
                      <Image source={greyTelIcon} />
                    </CardRightContainer>
                  </Card>
                  <Card style={{backgroundColor: 'rgba(42,82,152,0.5)'}}>
                    <CardLeftContainer>
                      <CardTitle style={{color: 'rgba(40,55,121,1)'}}>
                        Başarılı Çağrı
                      </CardTitle>
                      <CardDesc
                        style={{
                          color: 'rgba(40,55,121,1)',
                          fontWeight: 'bold',
                        }}>
                        78 Arama
                      </CardDesc>
                    </CardLeftContainer>
                    <CardRightContainer>
                      <Image source={blueTelIcon} />
                    </CardRightContainer>
                  </Card>
                  <Card style={{backgroundColor: 'rgba(118,184,82,0.5)'}}>
                    <CardLeftContainer>
                      <CardTitle style={{color: 'rgba(25,155,62,1)'}}>
                        Aktif Çağrı
                      </CardTitle>
                      <CardDesc
                        style={{
                          color: 'rgba(25,155,62,1)',
                          fontWeight: 'bold',
                        }}>
                        78 Arama
                      </CardDesc>
                    </CardLeftContainer>
                    <CardRightContainer>
                      <Image source={greenTelIcon} />
                    </CardRightContainer>
                  </Card>
                  <Card style={{backgroundColor: 'rgba(236,47,75,0.5)'}}>
                    <CardLeftContainer>
                      <CardTitle style={{color: 'rgba(155,41,25,1)'}}>
                        Kayıp Çağrı
                      </CardTitle>
                      <CardDesc
                        style={{
                          color: 'rgba(155,41,25,1)',
                          fontWeight: 'bold',
                        }}>
                        18/74 Arama
                      </CardDesc>
                    </CardLeftContainer>
                    <CardRightContainer>
                      <Image source={redIcon} />
                    </CardRightContainer>
                  </Card>
                  <Card
                    style={{
                      width: '100%',
                      backgroundColor: 'rgba(255,174,64,0.5)',
                    }}>
                    <CardLeftContainer>
                      <CardTitle style={{color: 'rgba(255,174,60,1)'}}>
                        Kuyrukta Bekleyen
                      </CardTitle>
                      <CardDesc
                        style={{
                          color: 'rgba(255,174,60,1)',
                          fontWeight: 'bold',
                        }}>
                        78 Arama
                      </CardDesc>
                    </CardLeftContainer>
                    <CardRightContainer>
                      <Image source={orangeTelIcon} />
                    </CardRightContainer>
                  </Card>
                </CardListWrapper>

                <CallTimeTitle>Çağrı Süreleri</CallTimeTitle>
                <CallTimeDesc>
                  Günlük olarak gelen çağrılarınıza ait sürelerdir.
                </CallTimeDesc>

                <CallTimeCard>
                  <View style={{alignItems: 'center', flexDirection: 'row'}}>
                    <Image source={clockBlue} />
                    <CallTimeCardTitle>Toplam Süre</CallTimeCardTitle>
                  </View>
                  <CallTimeCardTitle style={{color: 'rgba(40,55,121,1)'}}>
                    00:00:00
                  </CallTimeCardTitle>
                </CallTimeCard>
                <CallTimeCard>
                  <View style={{alignItems: 'center', flexDirection: 'row'}}>
                    <Image source={clockRed} />
                    <CallTimeCardTitle>
                      Kuyrukta Bekleyen Süre
                    </CallTimeCardTitle>
                  </View>
                  <CallTimeCardTitle style={{color: 'rgba(155,41,25,1)'}}>
                    00:00:00
                  </CallTimeCardTitle>
                </CallTimeCard>
                <CallTimeCard>
                  <View style={{alignItems: 'center', flexDirection: 'row'}}>
                    <Image source={clockGreen} />
                    <CallTimeCardTitle>Başarılı Süre</CallTimeCardTitle>
                  </View>
                  <CallTimeCardTitle style={{color: 'rgba(25,155,62,1)'}}>
                    00:00:00
                  </CallTimeCardTitle>
                </CallTimeCard>
              </DashboardContainer>
            </PageContainer>
          </SafeAreaView>
        </ImageBackground>
      </View>
    );
  
}


