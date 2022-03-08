import React,{useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Bubbles } from 'react-native-loader';
import Notif from '../../../components/atoms/Notif.js';

const HeaderProvinsi = (props) => {
    const globalReducer = useSelector((state) => state.globalReducer)
    const navigation = useNavigation()
    const set = useDispatch()
    const sheetRef = props.sheetRef
    
    const backScreen = () => {
      set({type:'RESET_NOTIF'})
      navigation.goBack()
    }

    return (
      <View>
        <View style={st.wrapHeader}>
            <TouchableOpacity style={st.notif} onPress={() => backScreen()}>
              <FontAwesome5 name="long-arrow-alt-left" color="#fff" size={28} />
            </TouchableOpacity>
            <View style={st.head}>
              {
              globalReducer.isLoading ?
              <Bubbles style={st.loading} size={8} color="#FFF" />
              :
              <Image source={require('../../../assets/images/logo.png')} style={st.logo}></Image>
              }  
            </View>
            <Text style={st.pilih}>Pilih Provinsi</Text>
            <TouchableOpacity style={st.picker} onPress={() => sheetRef.current.snapTo(0)}>
                <Text style={st.txpicker}>{props.name}</Text>
                <FontAwesome5 name='caret-down' color='white' size={25} />
            </TouchableOpacity>
        </View>
        <Notif status={globalReducer.tipeNotif} text={globalReducer.isNotif} />
      </View>
    )
  }

  const st = StyleSheet.create({
    wrapHeader: {
      backgroundColor:'#7D2A9E',
      paddingHorizontal:17,
      paddingVertical:40,
      paddingBottom:20
    },
    titleHeader:{
      color:'white',
      alignItems: 'center',
      justifyContent:'center',
      fontSize:18,
      fontWeight:'bold'
    },
    notif: {
      width:50,
    },
    head:{
        alignItems:'center',
        justifyContent:'center',
        top:-27
    },
    logo: {
        width:85,
        height:25,
    },
    pilih:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:12,
        top:-20
    },
    picker:{
        paddingHorizontal:20,
        paddingVertical:10,
        borderWidth:2,
        borderColor:'#3E184E',
        borderRadius:6,
        backgroundColor:'#61237A',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:-10
    },
    txpicker:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
    },
  })
  
  HeaderProvinsi.defaultProps = {
    color: 'white'
  }

  export default HeaderProvinsi;

