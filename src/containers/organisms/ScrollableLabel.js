import React from 'react';
import { StyleSheet,Text, View, Image, ScrollView,TouchableOpacity } from 'react-native';
import CardInfo from '../../components/molecules/CardInfo.js';

const ScrollableLabel = (props) => {
    var onsetNominal = props.onsetNominal
    return (
        <View>
            <ScrollView horizontal={true} style={st.wrapper} showsHorizontalScrollIndicator={false}>
                {
                    props.data.map((nominal) => {
                        return (
                        <TouchableOpacity key={nominal.id} style={st.label} onPress={() => onsetNominal(nominal.value)}><Text>{nominal.price}</Text></TouchableOpacity>
                        )  
                    })
                }
            </ScrollView>
        </View>
    )
}

const st = StyleSheet.create({
    wrapper : {
        marginTop:10,flexDirection:'row'
    },
    label: {
        padding:10,
        paddingHorizontal:15,
        borderRadius:15,
        borderWidth: 3,
        borderColor: "#efefef",
        marginRight:10,
        marginVertical:5
    }
})

ScrollableLabel.defaultProps = {
    backgroundColor: 'white'
  }

export default ScrollableLabel;