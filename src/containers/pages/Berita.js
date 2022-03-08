import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../../components/molecules/Card';
import HeaderBerita from '../organisms/Header/HeaderBerita';

const Berita = (route) => {
  
  return (
    <View style={st.wrap}>
      <HeaderBerita />
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
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal:17,
    paddingVertical:10
  },
  wrap: {
    flex:1
  }
});

export default Berita
