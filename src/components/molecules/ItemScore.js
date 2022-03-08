import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import ButtonIconRight from '../../components/atoms/ButtonIconRight';
import { useNavigation } from '@react-navigation/native';

const ItemScore = (props) => {
    const navigation = useNavigation();
    return (
        <View style={st.items}>
            <View style={st.prov}>
                <Text style={st.title}>Provinsi</Text>
                <Text style={st.provinsi}>{props.provinsi}</Text>
            </View>
            <View style={st.jum}>
                <Text style={st.title}>Total Positif</Text>
                <Text style={st.total}>{props.total}</Text>
            </View>
            <View style={st.detail}>
                <ButtonIconRight  
                    onPress={() => 
                        navigation.navigate(
                            'CekProvinsi',{ 
                                idprovinsi:props.no, 
                                nameprovinsi:props.provinsi 
                         })} 
                    title="Detail" icon="caret-right" btncolor="#efefef" txtcolor="#333" height={30} 
                />
            </View>
        </View>
    )
  }
  
  const st = StyleSheet.create({
    items: {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:7
      },
      number:{
          width:'10%',
      },
      num:{
        fontSize:16,
        fontWeight:'bold',
      },
      row: {
          flex:1,
          justifyContent:'center'
      },
      title: {
          fontSize:10,
          color:'#818181',
      },
      provinsi: {
         fontSize:12,
         fontWeight:'bold' 
      },
      total:{
          fontSize:14,
          color:'#F97E00',
          fontWeight:'bold'
      },
      detail:{
          width:'25%',
          justifyContent:'center',
      },
      prov:{
        flex:1,
        justifyContent:'center',
        width:'50%'
      },
      jum:{
        flex:1,
        justifyContent:'center',
        width:'25%'
      },
  });

  export default ItemScore;

