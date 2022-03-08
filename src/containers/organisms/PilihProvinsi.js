import React,{useState,useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import ShadowButton from '../../components/atoms/ShadowButton';
import { FontAwesome5 } from '@expo/vector-icons';
import API from '../../config/services'



const PilihProvinsi = (props) => {

    const [provinsi, setProvinsi] = useState('')
    var onsetProvinsi = props.onsetProvinsi
    const sheetRef = props.sheetRef

    useEffect(() => {
        const getdata = async() => {  
            const response = await API.getProvinsi()
            setProvinsi(response.list_data)   
        }
        getdata()
    },[]);

    const ListProvinsi = Object.keys(provinsi).map((item, index) => {
        return (
            <TouchableOpacity style={st.boxprovince} onPress={() => onsetProvinsi(index, provinsi[index].key) } key={index}>
                <Text style={st.provinsi}>{provinsi[index].key}</Text>
                <FontAwesome5 name="circle" color="#ccc" size={20} />
            </TouchableOpacity>
        )
    })

    return (
        <View style={st.bottomsheet}>
                <View style={st.boxpoint}>    
                    <View style={st.point}></View>
                </View>
                <View style={st.boxtitle}>
                    <Text style={st.titlebottom}>Pilih Provinsi :</Text>
                    <View>
                        <ShadowButton title='Cancel' width={100} onPress={() => sheetRef.current.snapTo(1)} />
                    </View>
                </View>
                <ScrollView nestedScrollEnabled>
                    {ListProvinsi}
                </ScrollView>
            </View>
    )
}

  const st = StyleSheet.create({
    bottomsheet:{
        backgroundColor:'#fff',
        height:350,
    },
    boxprovince:{
        flex:1,
        flexDirection:'row',
        paddingVertical:10,
        borderBottomColor:'#efefef',
        borderBottomWidth:1,
        paddingHorizontal:17,
        justifyContent:'space-between'
    },
    titlebottom:{
        fontSize:20,
        fontWeight:'bold',
        paddingVertical:10,
        color:'#000',
        },
    provinsi:{
        color:'#666',
        fontSize:12,
        fontWeight:'bold'
    },
    boxpoint:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:20,
    },
    point:{
        width:50,
        height:6,
        backgroundColor:'#ccc',
        borderRadius:10,
    },
    boxtitle:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:17,
    }
  })

  export default PilihProvinsi;

