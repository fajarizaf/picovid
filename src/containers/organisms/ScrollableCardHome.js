import React, {Component} from 'react';
import { StyleSheet,Text, View, Image, ScrollView } from 'react-native';
import CardNewsStd from '../../components/molecules/CardNewsStd.js';

class ScrollableCardHome extends Component {
    render() {
        return (
            <View>
                <ScrollView horizontal={true} style={styles.wrapper} showsHorizontalScrollIndicator={false}>
                    <CardNewsStd type="scroll" title="5 Gejala bahwa anda terkena covid 19" desc="" src={require('../../assets/banner/tips-1.png')}/>
                    <CardNewsStd type="scroll" title="Selalu biasakan jaga jarak, untuk menghindari penyebaran" desc="" src={require('../../assets/banner/tips-2.png')}/>
                    <CardNewsStd type="scroll" title="Alasan perbanyak istirahat, untuk terhindar dari covid 19" desc="" src={require('../../assets/banner/tips-3.png')}/>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logoCard: {
        width:71,
        height:13,
        marginBottom:7
    },
    wrapper : {
        marginTop:10,flexDirection:'row'
    },
    header: {
        fontWeight:'bold',color:'black',fontSize:14
    },
    desc: {
        fontSize:12,color:'#494a4a',marginTop:5
    }
})

export default ScrollableCardHome;