import React,{useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PickerProvinsi = (props) => {

    const [provinsi, setProvinsi] = useState('DKI Jakarta')

    return (
        <View style={st.container}>
            <Text>{provinsi}</Text>
        </View>
    )
}

  const st = StyleSheet.create({
    
  })

  export default PickerProvinsi;

