import React, {Component} from 'react';
import { StyleSheet,Text, View, ScrollView } from 'react-native';

class ScrollableCardCount extends Component {
    render() {
        return (
            <View style={{paddingVertical:10}}>
                <ScrollView horizontal={true} style={styles.wrapper} showsHorizontalScrollIndicator={false}>
                    <View style={styles.card}>
        <Text style={{fontSize:24,fontWeight:'bold',color:'#812CA5'}}>{this.props.positif}</Text>
                        <Text style={{color:'#812CA5',fontSize:12}}>Jumlah Positif</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={{fontSize:24,fontWeight:'bold',color:'#FA8100'}}>{this.props.dirawat}</Text>
                        <Text style={{color:'#FA8100',fontSize:12}}>Jumlah Dirawat</Text>
                    </View>
                    <View style={{
                        width:132,
                        paddingHorizontal:10,
                        paddingVertical:20,
                        justifyContent:'center',
                        alignItems:'center',
                        borderWidth:2,
                        borderRadius:8,
                        borderColor:'#00AAE7',
                        backgroundColor:'#fff',
                        marginRight:10
                    }}>
                        <Text style={{fontSize:24,fontWeight:'bold',color:'#00AAE7'}}>{this.props.sembuh}</Text>
                        <Text style={{color:'#00AAE7',fontSize:12}}>Jumlah Sembuh</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={{fontSize:24,fontWeight:'bold',color:'#FF0000'}}>{this.props.meninggal}</Text>
                        <Text style={{color:'#FF0000',fontSize:12}}>Jumlah Meninggal</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        width:132,
        paddingHorizontal:10,
        paddingVertical:20,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderRadius:12,
        borderColor:'#cacaca',
        backgroundColor:'#fff',
        marginRight:10
    },
    wrapper:{
        paddingLeft:17
    }
})

export default ScrollableCardCount;