import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import { useNavigation, TabActions } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Bubbles } from 'react-native-loader';
import Notif from '../../atoms/Notif.js'


const HeaderStandart = (props) => {
    const globalReducer = useSelector((state) => state.globalReducer)
    const navigation = useNavigation()
    const set = useDispatch()
    
    const backScreen = () => {
      set({type:'RESET_NOTIF'})
      navigation.goBack()
    }

    const customBackScreen = (root,screen) => {
      set({type:'RESET_NOTIF'})
      navigation.navigate(root, {screen: screen})
    }

    return (
      <View>
        <View style={st.wrapHeader}>
            {
            props.back === 'true' ?
              <TouchableOpacity style={st.notif} onPress={() => backScreen()}>
                <FontAwesome5 name="long-arrow-alt-left" color="#fff" size={28} />
              </TouchableOpacity>
            :
              <TouchableOpacity style={st.notif} onPress={() => customBackScreen(props.root,props.screen)}>
                <FontAwesome5 name="times" color="#fff" size={28} />
              </TouchableOpacity>
            }
            <View>
              {
              globalReducer.isLoading ?
              <Bubbles style={st.loading} size={8} color="#FFF" />
              :
              <Text style={st.titleHeader}>{props.title}</Text>
              }  
            </View>
            <TouchableOpacity style={st.notif}>
              <FontAwesome5 name="bell" color="#fff" size={28} />
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
  
  HeaderStandart.defaultProps = {
    color: 'white'
  }

  export default HeaderStandart;

