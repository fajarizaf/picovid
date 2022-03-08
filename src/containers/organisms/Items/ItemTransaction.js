import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const ItemTransaction = (props) => {
    return (
      <View>
        <View style={st.box}>
            <View style={st.itemicon}>
                  <FontAwesome5 name="wallet" color="#ccc" size={20} />
            </View>
            <View style={st.row}>
                <Text style={st.label}>NOMOR TAGIHAN :</Text>
                <Text style={st.notagihan}>#4FGH</Text>
            </View>
            <View style={st.rownominal}>
                <Text style={st.label2}>NOMINAL :</Text>
                <Text style={st.price}>Rp. 5000.000</Text>
            </View>
            <View style={st.boxarrow}>
                <FontAwesome5 style={st.arrow} name="caret-right" color="#ccc" size={20} />
            </View>
        </View>
        <Text style={st.status}>
          Menunggu Pembayaran
        </Text>
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
    status: {
      paddingVertical:5,
      paddingHorizontal:15,
      backgroundColor:'#ffc600',
      color:'#3a2602',
      marginLeft:10,
      fontSize:10,
      width:135,
      marginBottom:10
    }
  })
  
  ItemTransaction.defaultProps = {
    color: 'white'
  }

  export default ItemTransaction;

