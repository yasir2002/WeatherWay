import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BACKGROUND_COLOR } from '../constants/colors';
import LottieView from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';

const Error = () => {
  return (
    <View style={styles.main}>
        <StatusBar style='light'/>
        <LottieView autoPlay
          loop source={require('../assets/animations/ErrorAnimation.json')} 
          style={{height:250,width:250}}
      />
    </View>
  )
}

export default Error;

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: BACKGROUND_COLOR,
    },
    text:{
        color:'#fff'
    }
})