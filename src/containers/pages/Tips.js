import React from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, View, Text } from 'react-native';
import Card from '../../components/molecules/Card';
import HeaderTips from '../organisms/Header/HeaderTips';

const Tips = (route) => {
  
  return (
    <View style={st.wrap}>
      <HeaderTips />
      <ScrollView style={st.body}>
        
        <Card type="scroll" title="5 Gejala bahwa anda terkena covid 19" desc="" src={require('../../assets/banner/tips-1.png')}/>
        <Card type="scroll" title="Selalu biasakan jaga jarak, untuk menghindari penyebaran" desc="" src={require('../../assets/banner/tips-2.png')}/>
        <Card type="scroll" title="Alasan perbanyak istirahat, untuk terhindar dari covid 19" desc="" src={require('../../assets/banner/tips-3.png')}/>
        <Card type="scroll" title="5 Gejala bahwa anda terkena covid 19" desc="" src={require('../../assets/banner/tips-1.png')}/>
        <Card type="scroll" title="Selalu biasakan jaga jarak, untuk menghindari penyebaran" desc="" src={require('../../assets/banner/tips-2.png')}/>
        <Card type="scroll" title="Alasan perbanyak istirahat, untuk terhindar dari covid 19" desc="" src={require('../../assets/banner/tips-3.png')}/>

      </ScrollView>
    </View>
  );

}

const st = StyleSheet.create({
  body: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    paddingHorizontal:17,
    paddingVertical:10
  },
  wrap: {
    flex:1
  }
});

export default Tips
