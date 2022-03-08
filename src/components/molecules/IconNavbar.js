import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const IconNavbar = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={st.navbarItem}>
            <View>
                <Image style={st.navbarIcon} source={props.src}></Image>
            </View>
            <Text style={props.active == true ? st.titleActive : st.titleDeactive} >{props.title}</Text>
        </TouchableOpacity>
    )
  }
  
  const st = StyleSheet.create({
    navbarItem: {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    navbarIcon: {
      width:26,
      height:26
    },
    titleDeactive: {
      fontSize:10, 
      color:'#545454',
      marginTop:4
    },
    titleActive:{
      fontSize:10,
      color:'#01aa13',
      marginTop:4
    }
  });

  export default IconNavbar;

