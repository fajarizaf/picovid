import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

const HeaderTips = (props) => {
    return (
      <View style={st.wrapHeader}>
          <View>
            <Image source={require('../../../assets/images/logo.png')} style={st.logo}></Image>
          </View>
      </View>
    )
  }

  const st = StyleSheet.create({
    wrapHeader: {
      backgroundColor:'#F57E00',
      alignItems:'center',
      justifyContent:'center',
      paddingHorizontal:20,
      paddingVertical:40,
      paddingBottom:25
    },
    logo: {
      width:85,
      height:25,
      top:5
    }
  })
  
  HeaderTips.defaultProps = {
    color: 'white'
  }

  export default HeaderTips;

