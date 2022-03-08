import React from 'react';
import {StyleSheet,Text, View, Image, TouchableOpacity} from 'react-native';

const CardNewsBtn = ({onPress}) => {
    return (
        <View style={st.container}>
            <View style={{position:'relative'}}>
              <View style={st.bgimage}>
                <Image style={st.img} source={require('../../assets/banner/gosend-banner-info.jpg')}></Image>
                <Image style={st.transparantbox}></Image>
                <Image style={st.logo} source={require('../../assets/icon/gosend-logo-white.png')} ></Image>
                <View style={st.content}> 
                  <View style={{justifyContent:'center'}}>
                    <Text style={st.title}>Gratis Ongkir dengan gosend</Text>
                  </View>
                  <View>
                    <TouchableOpacity style={st.btn}>
                      <Text onPress={onPress} style={st.btnText}>Get Voucher</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
        </View>
    )
  }

  const st = StyleSheet.create({
    container: {
      borderRadius:8,
      marginTop:20,
      marginBottom:8,
      marginHorizontal:17
    },
    bgimage:{
      width:'100%',height:200
    },
    img:{
      width:undefined,height:undefined,resizeMode:'cover',flex:1,borderRadius:8
    },
    transparantbox:{
      width:'100%',height:'100%',backgroundColor:'black',position:'absolute',borderRadius:8,opacity:0.2
    },
    logo:{
      position:'absolute',width:65,height:11,left:16,top:16
    },
    content:{
      position: 'absolute',bottom:0,left:0,width:'100%',flexDirection:'row',justifyContent:'space-between',paddingHorizontal:16,paddingBottom:16
    },
    title:{
      fontWeight:'bold',color:'white'
    },
    btn:{
      backgroundColor:'#31ae52',paddingHorizontal:15,paddingVertical:7,borderRadius:4
    },
    btnText:{
      fontSize:13,fontWeight:'bold',color:'white'
    }
  })

  export default CardNewsBtn;

