import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const EmptyDeposit = (props) => {
    return (
        <View style={st.container}>
            <FontAwesome5 name="wallet" style={st.image} color="#ccc" size={126} />
            <Text style={st.header}>Belum Pernah Topup</Text>
            <Text style={st.title}>Anda belum memiliki tagihan untuk permintaan Topup Deposit</Text>
        </View>
    )
  }

  const st = StyleSheet.create({
    container: {
        marginHorizontal:17,
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    header: {
        fontSize:25,
        color:'#000',
        fontWeight:'bold',
        marginVertical:5
    },
    title:{
        fontSize:14,
        color:'#666',
        width:300,
        textAlign:'center'
    }
  })
 
  export default EmptyDeposit;

