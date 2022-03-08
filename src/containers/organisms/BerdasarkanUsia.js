import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BerdasarkanUsia = (props) => {
    const navigation = useNavigation();
    return (
        <View style={st.row}>
            <Image source={props.src} style={st.logo}></Image>
            <View>
                <Text style={st.text1}>{props.name}</Text>
                <Text style={st.text2}>Rentan Usia: 19 - 30 th</Text>
                <Text style={st.text3}>Total Kasus : {props.kasus}</Text>
            </View>
        </View>
    )
  }

  const st = StyleSheet.create({
    row:{
        paddingVertical:5,
        flexDirection:'row'
    },
    logo:{
        width:53,
        height:59
    },
    text1:{
        fontWeight:'bold',
        color:'#585858'
    },
    text2:{
        fontSize:10,
        color:'#585858'
    },
    text3:{
        fontSize:12,
        color:'#585858'
    }
  })
  
  BerdasarkanUsia.defaultProps = {
    color: 'white'
  }

  export default BerdasarkanUsia;

