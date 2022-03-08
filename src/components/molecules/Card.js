import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Rokkitt_500Medium,
} from '@expo-google-fonts/rokkitt';

const Card = (props) => {
  
  let [fontsLoaded] = useFonts({
    Rokkitt_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

    return (
        <View style={styles.cardnews}>
            <View style={[(props.type == 'scroll') ? styles.scrollablethumbnail : styles.thumbnail ]}>
              <Image style={styles.img} source={props.src}></Image>
              <Text style={styles.title}>{props.title}</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={{color:'#000',fontSize:12,fontWeight:'700'}}>Selengkapnya</Text>
              </TouchableOpacity>
            </View>
        </View>
    )
}

  const styles = StyleSheet.create({
    button:{
      borderRadius:4,
      paddingTop:8,
      paddingBottom:8,
      paddingLeft:14,
      paddingRight:14,
      backgroundColor:'#fff',
      position:'absolute',
      width:undefined,
      right:15,
      bottom:15,
    },
    cardnews: {
      borderRadius:8,
      elevation:1,
      marginTop:10,
      marginBottom:10,
      width:'100%'
    },
    scrollablecardnews: {
      borderRadius:8,
      elevation:1,
      marginTop:20,
      marginBottom:20,
      width:'100%',

    },
    thumbnail: {
      width:'100%',
      height:200,
    },
    scrollablethumbnail: {
      width:'100%',
      height:140,
    },
    title: {
      position:'absolute',
      fontSize:16,
      fontFamily:'Rokkitt_500Medium',
      marginBottom:5,
      right:20,
      top:15,
      width:'45%',
      color:'#042D22',
      lineHeight:16,
      textAlign:'right'
    },
    desc: {
      color:'#4a494a',
      fontSize:12
    },
    img: {
      width:undefined,
      height:undefined,
      resizeMode:'cover',
      flex:1,
      borderTopLeftRadius:8,
      borderTopRightRadius:8,
      borderBottomLeftRadius:8,
      borderBottomRightRadius:8
    }
  })
  
  Card.defaultProps = {
    color: 'white'
  }

  export default Card;

