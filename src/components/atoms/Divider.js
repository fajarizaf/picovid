import React from 'react';
import {StyleSheet, View} from 'react-native';

const Divider = () => {
    return (
        <>
        <View style={st.box}></View>
        </>
    )
  }

  const st = StyleSheet.create({
    box: {
        backgroundColor:'#3399db',
        paddingHorizontal:17,
        paddingBottom:20,
        marginBottom:-20
      }
  })
  
  export default Divider;

