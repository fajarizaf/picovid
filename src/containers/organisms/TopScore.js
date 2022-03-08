import React,{useState,useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ItemScore from '../../components/molecules/ItemScore';
import API from '../../config/services'

const TopScore = (props) => {

    const [score, setScore] = useState('')

    useEffect(() => {
        const getdata = async() => {  
            const response = await API.getProvinsi()
            setScore(response.list_data)
            
        }
        getdata()
    },[]);

    const ListScore = Object.keys(score).map((item, index) => {
        return (
            <ItemScore  key={index} no={index} provinsi={score[index].key} total={score[index].jumlah_kasus} />
        )
    })

    return (
        <View style={st.container}>
            <View style={st.head}>
                <Text style={st.titlehead1}>Peringkat Teratas :</Text>
                <Text style={st.titlehead2}>Berdasarkan jumlah positif</Text> 
            </View>
            {ListScore}
        </View>
    )
}

  const st = StyleSheet.create({
    container: {
        marginHorizontal:17,
    },
    head: {
        flex: 1,
        flexDirection: 'row',
        marginBottom:15
    },
    titlehead1: {
        fontWeight:'bold',marginRight:5,fontSize:12,color:'#000'
    },
    titlehead2: {
        fontSize:12,color:'#666'
    },
  })

  export default TopScore;

