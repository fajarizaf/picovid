import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const CardDocumentInfo = (props) => {
    return (
        <View style={[(props.type == 'scroll') ? st.scrollablecardnews : st.cardnews ]}>
            <View style={st.row}>
                <FontAwesome5 name="id-card" color="#ccc" size={66} />
            </View>
            <View style={st.row}>
              <Text style={st.desc}>12</Text>
              <Text style={st.tint}>Domain</Text>
            </View>
            <View style={{padding:12,justifyContent:'center'}}>
              <Text style={st.title}>Membutuhkan kelengkapan dokument, segera lengkap dokumen persyaratan pendaftaran domain anda</Text>
            </View>
            <View style={st.row}>
              <FontAwesome5 name="chevron-right" color="#ccc" size={12} />
            </View>
        </View>
    )
}

  const st = StyleSheet.create({
    cardnews: {
      borderRadius:8,
      elevation:1,
      marginBottom:20,
      marginHorizontal:17,
      flex:1,
      flexDirection:'row'
    },
    scrollablecardnews: {
      borderRadius:8,
      elevation:1,
      marginTop:20,
      marginBottom:20,
      width:280,
      marginLeft:17,
      flexDirection:'row'
    },
    title: {
      fontSize:14,
      fontWeight:'normal',
      marginBottom:5,
      width:'30%',
      alignItems:'center'
    },
    desc: {
      color:'#4a494a',
      fontSize:30,
      fontWeight:'bold'
    },
    tint: {

    },
    row: {
      justifyContent:'center',
      alignItems:'center',
      padding:12
    }
  })
  
  CardDocumentInfo.defaultProps = {
    color: 'white'
  }

  export default CardDocumentInfo;

