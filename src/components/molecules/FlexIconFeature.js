import React from 'react';
import {Text, View, Image} from 'react-native';

const FlexIconFeature = (props) => {
    return (
      <View style={{flex:1,alignItems:'center'}}>
        <Image style={{width:props.width,height:props.height}} source={props.src}></Image>
        <Text style={{color:props.color,fontSize:props.fontSize,fontWeight:props.fontWeight,marginTop:props.marginTop}}>{props.title}</Text>
      </View>
    )
  }
  
  FlexIconFeature.defaultProps = {
    color: 'white',
    width: 28,
    height:28,
    fontSize:13,
    marginTop:12,
    fontWeight:'bold'
  }

  export default FlexIconFeature;

