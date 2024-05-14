import React from "react";
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker'; 

export default function App() {
  
  return (

  <SafeAreaView style={styles.container}>
  <View style={styles.top}>
  <Text style={styles.heading}> Produce Owners Group App </Text>
  <Image
        style={styles.image}
        source={{ uri: 'https://images.unsplash.com/photo-1495570689269-d883b1224443?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&       ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', }}
  />
  </View>

  <View style={styles.mid1}>

  </View>

  <View style={styles.bottom}>

  <Text style={styles.heading3}> Rohan, Bogdan, Zihao, Inigo </Text>

  </View>

  </SafeAreaView>

  

  );}

  const styles = StyleSheet.create({

    container: {
      flexDirection: 'column',
      flex: 5,
      backgroundColor: 'lightblue'
    },

    top: {
      flex: 1.5,
      backgroundColor: 'pink'
    },

    mid1: {
      flex: 4,
      backgroundColor: 'lightblue'
    },

    bottom: {
      flex: .25,
      backgroundColor: 'white'
    },


    heading: {
      fontSize: 25,
      textAlign: 'center',
      marginTop: 15
    },

    heading3: {
      fontSize: 20,
      textAlign: 'center',
      marginTop: 3,
    },

      image: {
      marginTop: 15,
      padding: 20,
      alignSelf: 'center',
      width: 300,
      height: 100,
      
  },
  });

