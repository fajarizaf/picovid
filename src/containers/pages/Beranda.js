import React from 'react';
import { StyleSheet, SafeAreaView , ScrollView } from 'react-native';
import HeaderHome from '../organisms/Header/HeaderHome';
import Notice from '../organisms/Notice';
import ScrollableCardHome from '../organisms/ScrollableCardHome';
import TopScore from '../organisms/TopScore';

const Beranda = () => {
    return (
      <SafeAreaView  style={st.wrap}>
          <HeaderHome />
          <ScrollView style={st.body}>
            <Notice />
            <ScrollableCardHome />
            <TopScore />
          </ScrollView>
      </SafeAreaView >
    );
}

const st = StyleSheet.create({
  body: {
    backgroundColor: '#F5F5F5',
    paddingBottom:90,
    flex: 1
  },
  wrap: {
    flex:1
  }
});

export default Beranda
