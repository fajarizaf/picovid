import React from 'react';
import {Text, View, Image} from 'react-native';

const IconFeature = (props) => {
    return (
        <View style={{alignItems:props.alignItems,padding:props.padding}}>
            <Image style={{width:props.width,height:props.height}} source={props.src} ></Image>
            <Text style={{fontSize:props.fontSize,marginTop:props.marginTop,color:props.color}}>{props.title}</Text>
        </View>
    )
  }
  
  IconFeature.defaultProps = {
    color: '#333',
    width: 40,
    height:40,
    fontSize:13,
    marginTop:5,
    fontWeight:'bold',
    padding:18,
    alignItems: 'center'
  }

  export default IconFeature;

