import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const StatusPage = (props) => {
    return (
        <View style={st.wrap}>
            <View style={st.bgimage}>
                <FontAwesome5 name={props.icon} style={st.icon} color="#ccc" size={126} />
            </View>
            <Text style={st.title} >{props.title}</Text>
            <Text style={st.desc} >{props.desc}</Text>
        </View>
    )
  }
  
  const st = StyleSheet.create({
    wrap: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    bgimage:{
        alignItems:'center',
        justifyContent:'center'
    },
    icon:{
        
    },
    title: {
        fontSize:20,
        fontWeight:'bold',
        marginTop:20,
        marginBottom:8,
        textAlign:'center'
    },
    desc: {
        fontSize:14,
        color:'#666',
        width:250,
        textAlign:'center'
    }
  });

  export default StatusPage;

