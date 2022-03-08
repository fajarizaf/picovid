import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Bubbles } from 'react-native-loader';
import Notif from '../../../components/atoms/Notif.js'


const HeaderFinance = (props) => {
    const globalReducer = useSelector((state) => state.globalReducer)
    const navigation = useNavigation()
    const set = useDispatch()
    
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
            <View>
              {
              globalReducer.isLoading ?
              <Bubbles style={st.loading} size={8} color="#FFF" />
              :
              <Text style={st.titleHeader}>{props.title}</Text>
              }  
            </View>
            <TouchableOpacity style={st.notif}>
              <FontAwesome5 name="filter" color="#fff" size={28} />
            </TouchableOpacity>
        </View>
        <Notif status={globalReducer.tipeNotif} text={globalReducer.isNotif} />
      </View>
    )
  }

  const st = StyleSheet.create({
    wrapHeader: {
      flexDirection: 'row',
      justifyContent:'space-between',
      backgroundColor:'#099268',
      flexWrap:'wrap',
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
      alignItems:'center',
      justifyContent:'center'
    }
  })
  
  HeaderFinance.defaultProps = {
    color: 'white'
  }

  export default HeaderFinance;

