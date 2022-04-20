import React, { useState } from 'react'
import { View, StatusBar, ScrollView, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
//Import thu vien cai ben ngoai vao:
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FlashMessage from 'react-native-flash-message';
import { showMessage, hideMessage } from "react-native-flash-message";

//Import Component: 
import { TextCustom } from './Components/CustomTextInput';
import  BaseInput  from './Components/BaseInput/index';

const App = () => {


  const symbols = {
    eye: 'eye',
    eye_slash: 'eye-slash',
    angle_left: 'angle-left',
    envelope: 'envelope',
    lock: 'lock'
  }

  const colors = {
    error1: '#FD5A65',
    error2: '#FFD1D1',
    blue: '#304D95',
    main: '#FFD834',
    white: '#FFFFFF',
    redNoti:'#FF3B3B',
    greenNoti:'#009444'
  }

  const pictures = {
    rabit: require('./assets/rabit.png'),
    error: require('./assets/error.png'),
    logo: require('./assets/logo.png'),
  }

  const [iconName, setIcon] = useState(symbols.eye_slash)
  const [iconState, setIconState] = useState(true)

  const [colorBorderEmail, setColorBorderEmail] = useState(colors.white)
  const [colorBorderPass, setColorBorderPass] = useState(colors.white)

  const [imageRabit, changeImage] = useState(pictures.rabit)

  const [textMail, setTextMail] = useState('')

  const [textPass, setTextPass] = useState('')

  const [colorInputBackGround, setInputBackGround] = useState(colors.white)

  const ShowMessage = (content,color)=>{
    showMessage({
      message:content,
      position: 'top',
      backgroundColor:color,
      floating:'true',
      duration:2000,
      style:styles.message,
    })
  }
  //Kiem tra thong tin nguoi dung dang nhap:
  const CheckInfo = () => {
    var str='';
    var check = false;
    if (textMail.length == 0) {
      str+='Email can not be empty';
    } else if (textMail.length < 8 || textMail.length > 30) {
      str+='Email must be at least 8-30 characters';
    }else if(textPass.length==0){
      str+='Password can not be empty';
    }else if(textPass.length<6||textPass.length>10){
      str+='Password must be at least 6-10 characters';
    }else if(textMail !== "nguyenreactnative@gmail.com" || textPass !== "*235689") {
      str+='Email and/or password are incorrect';
    }else{
      str+='Login success';
      check=true;
    }
    if(check==false){
      changeImage(pictures.error);
      ShowMessage(str,colors.redNoti);
    }else{
      changeImage(pictures.rabit);
      ShowMessage(str,colors.greenNoti);
    }
  }


  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.main }]}>
      <StatusBar backgroundColor={colors.main}></StatusBar>
      <View style={styles.heading}>
        <TouchableOpacity style={styles.circleButton}>
          <FontAwesome5 style={styles.icon} name={symbols.angle_left} size={18} />
        </TouchableOpacity>
        <View style={styles.brand}>
          <Image source={pictures.logo} />
        </View>
      </View>
      <Image style={[styles.logo, { resizeMode: 'contain' }]} source={imageRabit} />
      <Text style={[styles.title, { color: colors.blue }]}>Login to Labbit</Text>
      
      <TextCustom
      //Email
        backgroundColor={colorInputBackGround}
        borderColor={colorBorderEmail}
        iconLeftName={symbols.envelope}
        iconSize={18}
        iconColor={colors.blue}
        placeholder={'Email'}
        onFocus={() => { setColorBorderEmail(colors.blue) }} 
        onBlur={() => { setColorBorderEmail(colors.white) }}
        onChangeText={newText => setTextMail(newText)}
        secureTextEntry={false}
        iconState={false}
      ></TextCustom>

      <TextCustom
      //Password:
        backgroundColor={colorInputBackGround}
        borderColor={colorBorderPass}
        iconLeftName={symbols.lock}
        iconSize={18}
        iconColor={colors.blue}
        placeholder='Password'
        onFocus={() => setColorBorderPass(colors.blue)}
        onBlur={() => setColorBorderPass(colors.white)}
        onChangeText={newText => setTextPass(newText)}
        secureTextEntry={iconState}
        iconRightName={iconName}
        onPressIcon={() => {
          if (iconState) {
            setIconState(false)
            setIcon(symbols.eye)
          }
          else {
            setIconState(true)
            setIcon(symbols.eye_slash)
          }
        }}
      ></TextCustom>
      
      <BaseInput onPress={CheckInfo} />

      <View style={{ flexDirection: 'row', alignSelf: 'center', margin: 30 }}>
        <Text>Forgot Password?</Text>
        <Text style={{ fontWeight: 'bold' }}> Click Here</Text>
      </View>
      <FlashMessage
      position="top" />

    </ScrollView>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    flexDirection: 'row',
    margin: 20,
    alignItems: 'center',

  },
  circleButton: {
    backgroundColor: 'white',
    borderRadius: 100,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10
  },
  icon: {
    margin: 10,
  },
  brand: {
    paddingRight: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  logo: {
    alignSelf: 'center',
    marginRight: 40,
    height: 200,
    width: 200,
    marginTop: 30,
    marginBottom: 30
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
    alignSelf: 'center'
  },
  message:{
    borderRadius:0,
    flex: 1,
    flexDirection:'row'
  }
})

export default App