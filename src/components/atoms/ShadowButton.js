import React from 'react';
import {StyleSheet, Text,TouchableOpacity} from 'react-native';
import { Bars } from 'react-native-loader';

const ShadowButton = (props) => {
    return (
        <TouchableOpacity disabled={props.isDisabled}
          style={{
            backgroundColor:props.btncolor,
            alignItems: 'center',
            justifyContent:'center',
            marginTop:5,
            width:props.width,
            height:35,
            borderRadius:4,
            shadowColor: "#666",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.20,
            shadowRadius: 1.41,
            elevation: 2
          }} 
          onPress={props.onPress}>
            {
              props.isLoading ?
              <Bars  size={10} color="#261106" />
              :
              <Text  
              style={{
                color:props.txtcolor,
                fontWeight:'bold',
                fontSize:16
              }}>{props.title}</Text>
            }
        </TouchableOpacity>
    )
  }

  const st = StyleSheet.create({
    button:{
      
    },
    text: {
        
    }
  })

  ShadowButton.defaultProps = {
    btncolor: '#ffc600',
    txtcolor: '#3a2602',
    isDisabled:false
  }
  
  export default ShadowButton;

