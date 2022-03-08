import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const ListItemProduct = (props) => {
    return (
        <View style={{marginLeft:17}}>
            <View style={styles.wrapperImage}>
                <Image style={styles.img} source={props.src}></Image>
            </View>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
  }

  const styles = StyleSheet.create({
    wrapperImage: {
        width:150,height:150
    },
    img: {
        width:undefined,height:undefined,resizeMode:'cover',flex:1,borderRadius:4
    },
    title: {
        fontWeight:'bold',marginVertical:12
    }
  })
  
  ListItemProduct.defaultProps = {
    color: 'white'
  }

  export default ListItemProduct;

