import React, { useState } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ItemDeposit = (props) => {

  const navigation = useNavigation()

  labelStatus = (status,file) => {
    switch(status) {
      case "1":
        return (
          <Text style={st.aproved}>Telah Diterima</Text>
        )
      case "0":
        if(file != '0') {
          return (
            <Text style={st.processed}>Sedang Diproses</Text>
          )
        }
      default:
        return (
          <Text style={st.awaiting}>Menunggu Pembayaran</Text> 
        )
    }
  }
  
  return (
    <View>
      <TouchableOpacity style={st.box} 
        onPress={() => 
          navigation.navigate('Deposit', {
            screen:'Detail',
            params: {
              depositid:props.depositid,
              notagihan:props.notagihan,
              nominal:props.depositval,
              file:props.file,
              status:props.status,
              date:props.date,
              refunded:props.refunded
            }
        })}
      >
          <View style={st.itemicon}>
                <FontAwesome5 name="wallet" color="#ccc" size={20} />
          </View>
          <View style={st.row}>
              <Text style={st.label}>NOMOR TAGIHAN :</Text>
              <Text style={st.notagihan}>{props.notagihan}</Text>
          </View>
          <View style={st.row}>
              <Text style={st.label}>STATUS :</Text>
              {labelStatus(props.status,props.file)}
          </View>
          <View style={st.rownominal}>
              <Text style={st.label2}>NOMINAL :</Text>
              <Text style={st.price}>Rp. {props.depositval}</Text>
          </View>
          <View style={st.boxarrow}>
              <FontAwesome5 style={st.arrow} name="caret-right" color="#ccc" size={20} />
          </View>
      </TouchableOpacity>
    
        
      
    </View>
  )
}

  const st = StyleSheet.create({
    box: {
      borderRadius:4,
      elevation:1,
      marginHorizontal:10,
      flex:1,
      flexDirection:'row',
      backgroundColor:'#fff',
      paddingVertical:10,
      paddingHorizontal:10,
      marginBottom:10
    },
    row: {
      flex:1,
      justifyContent:'center'
    },
    rownominal: {
      flex:1,
      justifyContent:'center',
      
    },
    itemicon: {
      width:40
    },
    label: {
      color:'#ccc',
      fontSize:10
    },
    label2: {
      color:'#ccc',
      fontSize:10,
      textAlign:'right'
    },
    price: {
      color:'#000',
      fontSize:16,
      fontWeight:'bold',
      textAlign:'right',
    },
    notagihan: {
      color:'#054d7b',
      fontSize:18,
      fontWeight:'bold'
    },
    boxarrow: {
      width:30,
      justifyContent:'center',
      alignItems:'center'
    },
    aproved: {
      color:'#099268',
      fontSize:10,
      marginBottom:10
    },
    awaiting: {
      color:'#054d7b',
      fontSize:10,
      marginBottom:10,
    },
    processed: {
      color:'#3399db',
      fontSize:10,
      marginBottom:10
    }
  })
  
  ItemDeposit.defaultProps = {
    color: 'white'
  }

  export default ItemDeposit;

