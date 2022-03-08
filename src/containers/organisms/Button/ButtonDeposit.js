import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ButtonDeposit = (props) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity style={st.wrap} onPress={() => navigation.navigate('Deposit', {screen:'Topup'})}>
            <View style={st.button}>
                <FontAwesome5 name="plus" style={{marginRight:20}} color="#000" size={20} />
                <Text style={{fontWeight:'bold',fontSize:16}}>Topup Deposit</Text>
            </View>
        </TouchableOpacity>
    )
  }

  const st = StyleSheet.create({
    wrap: {
        position:'absolute',
        bottom:20,
        left:10,
        right:10
    },
    button:{
      backgroundColor:'#ffc600',
      alignItems: 'center',
      justifyContent:'center',
      flexDirection:'row',
      marginTop:5,
      height:50,
      borderRadius:5,
      shadowColor: "#666",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 2
    },
    text: {
        color:'#3a2602',
        fontWeight:'bold',
        fontSize:16
    }
  })
  
  export default ButtonDeposit;

