import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const CardInfo = (props) => {
    return (
        <View style={[(props.type == 'scroll') ? styles.scrollablecardnews : styles.cardnews ]}>
            <View style={{padding:16}}>
                <FontAwesome5 name={props.icon} style={{marginRight:10}} color="#ccc" size={66} />
            </View>
            <View style={{padding:16}}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.desc}>{props.desc}</Text>
            </View>
        </View>
    )
}

  const styles = StyleSheet.create({
    cardnews: {
      borderRadius:8,
      elevation:1,
      marginTop:20,
      marginBottom:20,
      width:'100%'
    },
    scrollablecardnews: {
      borderRadius:8,
      elevation:1,
      marginTop:20,
      marginBottom:20,
      width:280,
      marginLeft:17,
      flexDirection:'row'

    },
    thumbnail: {
      width:'100%',
      height:200,
    },
    scrollablethumbnail: {
      width:'100%',
      height:170,
    },
    title: {
      fontSize:16,
      fontWeight:'bold',
      marginBottom:5
    },
    desc: {
      color:'#4a494a',
      fontSize:30,
      fontWeight:'bold'
    },
    img: {
      width:undefined,
      height:undefined,
      resizeMode:'cover',
      flex:1,
      borderTopLeftRadius:8,
      borderTopRightRadius:8
    }
  })
  
  CardInfo.defaultProps = {
    color: 'white'
  }

  export default CardInfo;

