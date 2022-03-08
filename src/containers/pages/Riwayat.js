import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ItemRiwayat from '../../components/molecules/ItemRiwayat';

import Header from '../organisms/Header/Header';

const Riwayat = () => {
    return (
      <View style={st.wrap}>
          <Header />
          <ScrollView style={st.body}>
            <Text style={st.titlec}>Riwayat Penambahan</Text>
            <View style={{marginTop:15}}>
                <ItemRiwayat tanggal='12 September 2020' />
                <ItemRiwayat tanggal='11 September 2020' />
                <ItemRiwayat tanggal='10 September 2020' />
                <ItemRiwayat tanggal='09 September 2020' />
                <ItemRiwayat tanggal='08 September 2020' />
                <ItemRiwayat tanggal='07 September 2020' />
                <ItemRiwayat tanggal='07 September 2020' />
                <ItemRiwayat tanggal='07 September 2020' />
                <ItemRiwayat tanggal='07 September 2020' />
            </View>
          </ScrollView>
      </View>
    );
}

const st = StyleSheet.create({
  body: {
    backgroundColor: '#F5F5F5',
    paddingBottom:30,
    flex: 1,
    paddingLeft:20
  },
  wrap: {
    flex:1
  },
  titlec:{
    fontSize:14,
    fontWeight:'bold',
    paddingTop:15
  }
});

export default Riwayat
