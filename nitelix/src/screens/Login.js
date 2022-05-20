import React, {useRef,useContext, useEffect} from 'react';
import styled from 'styled-components/native';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  SafeAreaView,
  Image,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';
import Header from '../components/Header';
import {white} from 'react-native-paper/lib/typescript/styles/colors';
import {AuthContext} from '../context/AuthContext';
import publicIP from 'react-native-public-ip';
// import Background from '../assets/mona_lisa.jpg'

const image = {uri: 'https://reactjs.org/logo-og.png'};


function Login() {
  //Kullanıcı girişi için hookslar.
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [companyNum, setCompanyNum] = React.useState('');
 
  //Auth context'in içerisindeki login fonksiyonunu kullanacağımızı belirtiyoruz.
  const {isLoading, login} = useContext(AuthContext);

  const win = Dimensions.get('window');

  
  const signin=true;

  return (
    <View style={{display: 'flex'}}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        imageStyle={{opacity: 1}}
        style={{height: win.height, width: win.width}}>
        <View style={styles.titleContainer}>
          <Text style={styles.companyName}>NİTELİX</Text>
          <Text style={styles.companyTitle}>Çağrı Merkezi Yönetim Sistemi</Text>
        </View>
        {/* //Giriş başarılıysa yönlendirilicek.Başarısızsa hata mesajı çıkıcak */}
        {signin ? (
          <>
            <View style={styles.textboxContainer}>
              <View style={styles.inputContainer1}>
                <TextInput
                  style={styles.userInput}
                  onChangeText={e => setUserName(e)}
                  value={userName}
                  placeholder="Kullanıcı Adı"
                  placeholderTextColor={'rgba(255,255,255,0.8)'}
                />
                <TextInput
                  style={styles.passwordInput}
                  onChangeText={e => setPassword(e)}
                  value={password}
                  secureTextEntry={true}
                  placeholder="Şifre"
                  placeholderTextColor={'rgba(255,255,255,0.8)'}
                />
              </View>

              <TextInput
                style={styles.companyNumInput}
                onChangeText={e => setCompanyNum(e)}
                value={companyNum}
                placeholder="Şirket Numarası"
                keyboardType="numeric"
                placeholderTextColor={'rgba(255,255,255,0.8)'}
              />
            </View>
            <View style={styles.signInButtonContainer}>
              {/* AuthContext'in içerisindeki login fonksiyonuna kullanıcının girdiği inputlar gönderildi */}
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  login(companyNum, userName, password);
                }}>
                <Text style={styles.signInText}>Giriş Yap</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <>
            <View style={styles.warningContainer}>
              <Text style={{color: 'white'}}>
                İnternet bağlantınızda bir problem var.
              </Text>
              <Text style={{color: 'white'}}>Lütfen kontrol ediniz.</Text>
            </View>
            <View style={styles.signOutButtonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text>Çıkış Yap</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>V:1.0.1247</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  userInput: {
    height: 50,
    padding: 10,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '800',
  },
  passwordInput: {
    height: 50,
    padding: 10,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '800',
  },
  companyNumInput: {
    marginLeft: 25,
    marginRight: 25,
    backgroundColor: ' rgba(255,255,255,0.1)',
    marginTop: 30,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '800',
    borderRadius: 15,
  },
  versionText: {
    color: 'white',
  },
  companyName: {
    color: 'white',
    fontSize: 42,
    
    fontWeight: '800',
  },
  companyTitle: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 20,
    fontWeight: '400',
  },
  signInText: {
    fontSize: 16,
    color: '#2A5298',
  },
  button: {
    display: 'flex',
    backgroundColor: 'white',
    height: 45,
    borderRadius: 12,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    display: 'flex',
    marginTop: 80,
    alignItems: 'center',
  },
  textboxContainer: {
    marginTop: 80,
  },
  signInButtonContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    marginTop: 20,

    marginRight: 25,
  },
  versionContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  inputContainer1: {
    marginLeft: 25,
    marginRight: 25,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 15,
  },
  warningContainer: {
    marginLeft: 25,
    marginRight: 25,
    backgroundColor: 'grey',
    borderRadius: 10,
    marginTop: 60,
    alignItems: 'center',
    height: 90,
    justifyContent: 'center',
    color: 'white',
  },
  signOutButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 50,

    marginRight: 25,
  },
});

export default Login;
