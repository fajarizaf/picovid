import React,{useState,useEffect} from 'react';
import { StyleSheet , ScrollView,View, Text } from 'react-native';
import BerdasarkanUsia from '../organisms/BerdasarkanUsia';
import HeaderProvinsi from '../organisms/Header/HeaderProvinsi';
import ScrollableCardCount from '../organisms/ScrollableCardCount';
import ListProvinsi from '../organisms/PilihProvinsi';
import BottomSheet from 'reanimated-bottom-sheet';
import { TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import API from '../../config/services'



const CekProvinsi = ({route}) => {
    const params = route.params
    const[idprovinsi, setIdProvinsi] = useState(params.idprovinsi)
    const[provinsi, setProvinsi] = useState(params.nameprovinsi)

    const sheetRef = React.useRef(null)
    const fall = new Animated.Value(1)

    const [total, setTotal] = useState({
        positif:'',
        sembuh:'',
        dirawat:'',
        meninggal:''
    })

    const [usia, setUsia] = useState({
        balita:'',
        remaja:'',
        dewasa:'',
        orangtua:'',
        tua:'',
        lansia:''
    })

    const [update, setUpdate] = useState({  
        positif:'',
        sembuh:'',
        meninggal:''
    })


    const listProvinsi = () => {

        const onsetProvinsi = (id, name) => {
            setProvinsi(name)
            sheetRef.current.snapTo(1)
            setIdProvinsi(id)
            getdata(id)                
        }

        return (
            <ListProvinsi sheetRef={sheetRef} onsetProvinsi={onsetProvinsi} />
        )
    }

    useEffect(() => {
        getdata(idprovinsi)
    },[]);

    const getdata = async(id) => {  
        const response = await API.getProvinsi()
        setTotal({
            positif:response.list_data[id].jumlah_kasus,
            sembuh:response.list_data[id].jumlah_sembuh,
            dirawat:response.list_data[id].jumlah_dirawat,
            meninggal:response.list_data[id].jumlah_meninggal
        })
        setUsia({
            balita:response.list_data[id].kelompok_umur[0].usia.value,
            remaja:response.list_data[id].kelompok_umur[1].usia.value,
            dewasa:response.list_data[id].kelompok_umur[2].usia.value,
            orangtua:response.list_data[id].kelompok_umur[3].usia.value,
            tua:response.list_data[id].kelompok_umur[4].usia.value,
            lansia:response.list_data[id].kelompok_umur[5].usia.value
        })
        setUpdate({
            positif:response.list_data[id].penambahan.positif,
            sembuh:response.list_data[id].penambahan.sembuh,
            meninggal:response.list_data[id].penambahan.meninggal
        })
    }

    
    

    return (
      <View style={st.wrap}>
         <BottomSheet
            ref={sheetRef}
            initialSnap={1}
            snapPoints={[350, 0]}
            borderRadius={10}
            renderContent={listProvinsi}
            enabledContentGestureInteraction={false}
            callbackNode={fall}
        />
         <Animated.View style={{flex:1, opacity: Animated.add(0.1, Animated.multiply(fall, 1.0))}}>
            <HeaderProvinsi name={provinsi} sheetRef={sheetRef} />
            <ScrollView style={st.body}>
                <View style={st.title}>
                    <Text style={st.bold}>Total Keseluruhan :</Text>
                    
                </View>
                <ScrollableCardCount positif={total.positif} sembuh={total.sembuh} dirawat={total.dirawat} meninggal={total.meninggal} />
                <View style={st.title}>
                    <Text style={st.bold}>Kasus Berdasarkan Usia</Text>
                </View>
                <View style={st.container}>
                    <TouchableOpacity style={st.flex}>
                        <BerdasarkanUsia kasus={usia.balita} name='Balita' src={require('../../assets/images/balita-icon.png')}/>
                        <BerdasarkanUsia kasus={usia.remaja} name='Anak Remaja' src={require('../../assets/images/anak-remaja-icon.png')}/>
                    </TouchableOpacity>
                    <View style={st.flex}>
                        <BerdasarkanUsia kasus={usia.dewasa} name='Remaja Dewasa' src={require('../../assets/images/remaja-dewasa-icon.png')}/>
                        <BerdasarkanUsia kasus={usia.orangtua} name='Orang Tua' src={require('../../assets/images/orangtua-icon.png')}/>
                    </View>
                    <View style={st.flex}>
                        <BerdasarkanUsia kasus={usia.tua} name='Orang Tua' src={require('../../assets/images/orangtua-icon.png')}/>
                        <BerdasarkanUsia kasus={usia.lansia} name='Lansia' src={require('../../assets/images/lansia-icon.png')}/>
                    </View>
                </View>
                <View style={st.title}>
                    <Text style={st.bold}>Update kasus penambahan terbaru :</Text>
                </View>
                <View style={st.summary}>
                    <View style={st.cosum}>
                        <Text style={{color:'#fff',fontSize:12}}>Positif:</Text>
                        <Text style={st.sum}>{update.positif}</Text>
                    </View>
                    <View style={st.cosum}>
                        <Text style={{color:'#fff',fontSize:12}}>Sembuh:</Text>
                        <Text style={st.sum}>{update.sembuh}</Text>
                    </View>
                    <View style={st.cosum}>
                        <Text style={{color:'#fff',fontSize:12}}>Meninggal:</Text>
                        <Text style={st.sum}>{update.meninggal}</Text>
                    </View>
                </View>
            </ScrollView>
        </Animated.View > 
      </View>
    );
}

const st = StyleSheet.create({
  summary:{
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor:'#7D2A9E',
      marginHorizontal:17,
      borderRadius:4,
      paddingHorizontal:10,
      paddingVertical:5,
      marginTop:15
  },
  cosum:{
    paddingVertical:5,
    paddingHorizontal:10
  },
  sum:{
    color:'#fff',
    fontSize:18,
    fontWeight:'bold'
  },
  body: {
    backgroundColor: '#F5F5F5',
    paddingBottom:90,
    flex: 1,
  },
  wrap: {
    flex:1
  },
  flex:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginVertical:5
  },
  container:{
      marginHorizontal:17
  },
  title:{
      flexDirection:'row',
      paddingHorizontal:17,
      paddingVertical:5,
      marginBottom:-5,
      alignItems:'center'
  },
  bold:{
      fontWeight:'bold'
  },
  normal:{
      color:'#757575',
      fontSize:12
  },
  bottomsheet:{
      backgroundColor:'#fff',
      height:350,
  },
  boxprovince:{
    flex:1,
    flexDirection:'row',
    paddingVertical:10,
    borderBottomColor:'#efefef',
    borderBottomWidth:1,
    paddingHorizontal:17,
    justifyContent:'space-between'
  },
  titlebottom:{
      fontSize:20,
      fontWeight:'bold',
      paddingVertical:10,
      color:'#000',
    },
  provinsi:{
      color:'#666',
      fontSize:16,
  },
  boxpoint:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
     paddingVertical:20,
  },
  point:{
     width:50,
     height:6,
     backgroundColor:'#ccc',
     borderRadius:10,
  },
  boxtitle:{
      flexDirection:'row',
      justifyContent:'space-between',
      paddingHorizontal:17,
  }
});

export default CekProvinsi
