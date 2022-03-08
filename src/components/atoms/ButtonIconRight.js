import React from 'react'
import {StyleSheet, Text,TouchableOpacity} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

const ButtonIconRight = (props) => {
    return (
        <TouchableOpacity 
          style={{
            backgroundColor:props.btncolor,
            alignItems: 'center',
            justifyContent:'space-between',
            height:props.height,
            borderRadius:4,
            flexDirection:'row',
            paddingHorizontal:10,
            borderWidth:1,
            borderColor:'#ccc'
          }} 
          onPress={props.onPress}>
            <Text style={{
              color:props.txtcolor,
              fontWeight:'bold',
              fontSize:14,
              alignItems: 'center',
              paddingLeft:5
            }}>{props.title}</Text>
            <FontAwesome5 style={st.icon} name={props.icon} color="#000" size={16} />
        </TouchableOpacity>
    )
  }

  const st = StyleSheet.create({
    icon: {
        alignItems: 'center',
        top:1
    }
  })

  ButtonIconRight.defaultProps = {
    btncolor: '#efefef',
    txtcolor: '#3a2602',
    height:30
  }
  
  export default ButtonIconRight;

