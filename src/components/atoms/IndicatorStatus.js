import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { Bars } from 'react-native-loader';

const IndicatorStatus = (props) => {
    return (
        <>
        <Text style={st.notif}>{props.isNotif}</Text>
        </>
    )
  }

  const st = StyleSheet.create({
    loading: {
        marginBottom:15,
    },
    notif: {
        color:'#fff',
        paddingVertical:5,
        justifyContent:'center'
    }
  })
  
  export default IndicatorStatus;

