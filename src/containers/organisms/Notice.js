import React from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Notice = (props) => {
    const navigation = useNavigation();
    return (
        <View style={st.container}>
            <TouchableOpacity style={st.header} 
                onPress={() => 
                    navigation.navigate(
                        'CekProvinsi',{ 
                            idprovinsi:0, 
                            nameprovinsi:'DKI Jakarta' 
                     })} 
            >
                <View style={st.row}>
                    <FontAwesome5 name="exclamation-circle" style={{margin:15}} color="#fff" size={26} />
                    <View style={{top:12}}>
                        <Text style={st.title}>Periksa Perkembangan Covid 19 :</Text>
                        <Text style={{color:'white',fontSize:12}}>Di tiap Provinsi :</Text>
                    </View>
                </View>
                <Image source={require('../../assets/images/arrow-notice.png')} style={st.button}></Image>
            </TouchableOpacity>
        </View>
    )
  }

  const st = StyleSheet.create({
    container: {
        marginHorizontal:17,
    },
    header: {
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#7D2A9E',
        borderTopLeftRadius:7,
        borderTopRightRadius:7,
        borderBottomLeftRadius:7,
        borderBottomRightRadius:7,
        width:'100%',
        height:59,
        top:15,
    },
    title:{
        fontSize:12,fontWeight:'bold',color:'white'
    },
    row: {
        justifyContent:'center',
        flexDirection:'row'
    },
    button: {
        width:75,height:59,right:5
    }
  })
  
  Notice.defaultProps = {
    color: 'white'
  }

  export default Notice;

