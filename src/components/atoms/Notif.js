import React from 'react';
import {StyleSheet, View,Text} from 'react-native';

const Notif = (props) => {
    return (
        <>
        {
            props.text ?
            <View style={[(props.status == 'success') ? st.success : st.error ]}>
                <Text style={st.text}>{props.text}</Text>
            </View>
            :
            <></>
        }
        </>
    )
  }

  const st = StyleSheet.create({
    success: {
        backgroundColor:'#d4edda',
        paddingHorizontal:17,
        paddingVertical:10,
        justifyContent:'center',
        alignItems:'center'
      },
      error: {
        backgroundColor:'#ffc600',
        paddingHorizontal:17,
        paddingVertical:10,
        justifyContent:'center',
        alignItems:'center'
      },
    text: {
        color:'#000'
    }
  })
  
  export default Notif;

