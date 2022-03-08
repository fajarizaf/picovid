import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const ButtonStripped = (props) => {
    var downloadInvoice = props.downloadInvoice
    return (
        <TouchableOpacity style={st.row} onPress={() => downloadInvoice(props.fileinvoice, props.notagihan)}>
            <FontAwesome5 style={st.icon}  name="file-pdf" color="#099268" size={20} />
            <Text style={st.box}>Download Inovice PDF</Text>
        </TouchableOpacity>
    )
  }

  const st = StyleSheet.create({
    row: {
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent:'center',
        height:60,
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        flexDirection:'row',
        paddingHorizontal:10,
        borderWidth:2,
        borderColor:'#efefef',
        borderStyle:'dashed',
        marginHorizontal:10
    },
    box: {
        color:'#099268',
        fontWeight:'bold',
    },
    icon: {
        marginRight:10
    }
  })
  
  export default ButtonStripped;

