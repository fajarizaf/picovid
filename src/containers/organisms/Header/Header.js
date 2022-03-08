import React from 'react';
import {StyleSheet, Image, View, ImageBackground, Text} from 'react-native';

const Header = (props) => {
    return (
      <View style={st.wrapHeader}>
        <Image source={require('../../../assets/images/logo.png')} style={st.logo}></Image>
          <ImageBackground source={require('../../../assets/images/backgroundriwayat.png')} style={st.bgheader} >
              <View style={{marginTop:65}}>
                <Text style={st.te}>Total Penambahan</Text>
                <Text style={st.ti}>Hari ini : 12 September 2020</Text>
              </View>
              <View style={st.containerstat}>
                <View style={{padding:5}}>
                  <Text>Positif</Text>
                  <Text style={st.countheader}>3806</Text>  
                </View>
                <View style={{padding:5}}>
                  <Text>Meninggal</Text>
                  <Text style={st.countheader}>106</Text>  
                </View>
                <View style={{padding:5}}>
                  <Text>Sembuh</Text>
                  <Text style={st.countheader}>2241</Text>  
                </View>
                <View style={{padding:5}}>
                  <Text>Dirawat</Text>
                  <Text style={st.countheader}>1459</Text>  
                </View>
              </View>
          </ImageBackground>
      </View>
    )
  }

  const st = StyleSheet.create({
    wrapHeader: {
      backgroundColor:'#1CB142',
      alignItems:'center',
      paddingHorizontal:20,
      paddingTop:40,
      height:222,
      borderBottomColor:'#159E38',
      borderBottomWidth:3
    },
    logo: {
      width:85,
      height:25,
      top:5
    },
    bgheader:{
      flex: 1,
      resizeMode: "cover",
      width:'100%',
      marginTop:-40
    },
    te: {
      fontSize:24,
      color:'#fff',
      fontWeight:'bold'
    },
    ti: {
      fontSize:14,
      color:'#fff'
    },
    containerstat: {
      marginTop:10,
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between'
    },
    countheader:{
      fontSize:20,
      color:'#000',
      fontWeight:'bold'
    }
  })
  
  Header.defaultProps = {
    color: 'white'
  }

  export default Header;

