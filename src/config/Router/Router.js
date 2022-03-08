
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { Beranda,Riwayat,Tips,Berita,CekProvinsi } from '../../containers/pages/Index.js';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

Home = () => {
  return (
    <Tab.Navigator 
      initialRouteName={'Beranda'} 
      tabBarOptions={{
        activeTintColor: '#01ABE9',
        inactiveTintColor:'#5a6586',
        showLabel: true,
        style: {
          height: 55,
          backgroundColor: '#fff',
          paddingBottom:5,
          paddingTop:10,
         }
      }}
    >
      <Tab.Screen 
        name="Beranda" 
        component={Beranda} 
        options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="igloo" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Riwayat" 
        component={Riwayat}
        options={{
          tabBarLabel: 'Riwayat',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="chart-bar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Tips" 
        component={Tips}
        options={{
          tabBarLabel: 'Tips',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5  name="newspaper" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Berita" 
        component={Berita}
        options={{
          tabBarLabel: 'Berita',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-circle" color={color} size={size} />
          ),
        }} 
      />
    </Tab.Navigator>
  )
}

Router = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'} initialRouteName={'Home'}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CekProvinsi" component={CekProvinsi} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default Router;