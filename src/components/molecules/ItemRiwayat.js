import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ItemRiwayat = (props) => {
    return (
        <View style={st.boxriwayat}>
            <View style={st.row}>
                <Text style={{fontSize:10,color:'#666'}}>{props.tanggal}</Text>
            </View>
            <View style={st.row}>
                <Text style={{fontSize:10,color:'#666'}}>Positif</Text>
                <Text style={{fontSize:14,fontWeight:'bold'}}>3737</Text>
            </View>
            <View style={st.row}>
                <Text style={{fontSize:10,color:'#666'}}>Meninggal</Text>
                <Text style={{fontSize:14,fontWeight:'bold'}}>3737</Text>
            </View>
            <View style={st.row}>
                <Text style={{fontSize:10,color:'#666'}}>Sembuh</Text>
                <Text style={{fontSize:14,fontWeight:'bold'}}>2707</Text>
            </View>
            <View style={st.row}>
                <Text style={{fontSize:10,color:'#ccc'}}>Dirawat</Text>
                <Text style={{fontSize:14,fontWeight:'bold'}}>942</Text>
            </View>
        </View>
    )
  }
  
  const st = StyleSheet.create({ 
    boxriwayat:{
        padding:5,
        color:'#fff',
        borderColor:'#efefef',
        borderWidth:1,
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#efefef',
        marginVertical:5
    },
    row:{
        padding:5
    }
  });

  export default ItemRiwayat;

