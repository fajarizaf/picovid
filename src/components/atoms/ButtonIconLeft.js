import React from 'react'
import {StyleSheet, Text,TouchableOpacity} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

const ButtonIconLeft = (props) => {
    return (
        <TouchableOpacity 
            style={{
                backgroundColor:props.btncolor,
                alignItems: 'center',
                justifyContent:'center',
                height:props.height,
                borderRadius:4,
                shadowColor: "#666",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.20,
                shadowRadius: 1.41,
                elevation: 2,
                flex:1,
                flexDirection:'row',
                paddingHorizontal:10,
                marginLeft:props.marginleft,
                marginright:props.marginright
            }} 
            onPress={props.onPress}>
            <FontAwesome5 style={st.icon} name={props.icon} color={props.txtcolor} size={16} />
            <Text 
                style={{
                    color:props.txtcolor,
                    fontWeight:'bold',
                    fontSize:props.fontSize,
                    alignItems: 'center',
                    paddingLeft:5
                }}
                >{props.title}</Text>
        </TouchableOpacity>
    )
  }

  const st = StyleSheet.create({
    icon: {
        alignItems: 'center'
    }
  })

  ButtonIconLeft.defaultProps = {
    btncolor: '#ffc600',
    txtcolor: '#3a2602',
    marginleft:0,
    marginright:0,
    height:50,
    fontSize:18
  }
  
  export default ButtonIconLeft;

