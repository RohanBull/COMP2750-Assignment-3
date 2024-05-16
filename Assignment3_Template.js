import React, {useState} from "react";
import {SafeAreaView, StyleSheet, Text, View, Image, Pressable} from 'react-native';
import {Picker, Item} from '@react-native-picker/picker'; 

export default function App() {
  const [selectedVeg, setSelectedVeg] = useState("5");
  const [selectedVegQuant, setSelectedVegQuant] = useState("1");
  const [selectedFruit, setSelectedFruit] = useState("11");
  const [selectedFruitQuant, setSelectedFruitQuant] = useState("1");

  const [price, setPrice] = useState("");

  calculatePrice = () => {
    let vegPrice = parseInt(selectedVeg);
    let fruitPrice = parseInt(selectedFruit);
    let vegQuant = parseInt(selectedVegQuant);
    let fruitQuant = parseInt(selectedFruitQuant);

    setPrice("    $" + parseInt((vegPrice * vegQuant) + fruitPrice * fruitQuant));
  }

  return (
  <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.heading}> Produce Owners Group App </Text>
      <Image
        style={styles.image}
        source={{ uri: 'https://images.unsplash.com/photo-1495570689269-d883b1224443?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', }}
      />
    </View>

    <View style={styles.body}>
      <View style={styles.pickers}>

      <Picker
      style={styles.itemPicker}
      selectedValue={selectedVeg}
      onValueChange={(itemValue, itemIndex) =>
       setSelectedVeg(itemValue)
      }>
      <Picker.Item label="Potato - $5" value="5"/>
      <Picker.Item label="Carrot - $8" value = "8"/>
     </Picker>

        <Picker 
          style={styles.quantityPicker}
          selectedValue={selectedVegQuant}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedVegQuant(itemValue)
        }>
          <Item label="1" value="1"/>
          <Item label="2" value="2"/>
          <Item label="3" value="3"/>
          <Item label="4" value="4"/>
          <Item label="5" value="5"/>
        </Picker>
      </View>

      <View style={styles.pickers}>
      <Picker
      style={styles.itemPicker}
      selectedValue={selectedFruit}
      onValueChange={(itemValue, itemIndex) =>
       setSelectedFruit(itemValue)
      }>
      <Picker.Item label="Orange - $11" value="11"/>
      <Picker.Item label="Blueberry - $12" value = "12"/>
     </Picker>

        <Picker 
          style={styles.quantityPicker}
          selectedValue={selectedFruitQuant}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedFruitQuant(itemValue)
        }>
          <Item label="1" value="1"/>
          <Item label="2" value="2"/>
          <Item label="3" value="3"/>
          <Item label="4" value="4"/>
          <Item label="5" value="5"/>
        </Picker>
      </View>

      <View style={styles.buttonDiv}>
        <Pressable 
          style={styles.calcBTN}
          onPress={calculatePrice}
        >
          <Text style={styles.calcBTNText}>Calculate</Text>
        </Pressable>
      </View>

      <Text style={styles.output}>
        {"Total Price: " + price}
      </Text>
    </View>

    <View style={styles.footer}>
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

    header: {
      flex: 1.5,
      backgroundColor: 'pink'
    },

    body: {
      flex: 4,
      backgroundColor: 'lightblue'
    },

    footer: {
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
      marginTop: 3
    },

    image: {
      marginTop: 15,
      padding: 20,
      alignSelf: 'center',
      width: 300,
      height: 100
    },
    itemPicker: {
      flex: 3,
      marginRight: -10,
      },

    quantityPicker: {
      flex: 1,
      marginLeft: -10
    },

    pickers: {
      flexDirection: 'row',
      marginTop: -30
    },

    buttonDiv: {
      marginTop: 20,
      alignItems: 'center'
    },

    calcBTNText: {
      fontSize: 24,
      color: 'white',
      fontWeight: 500,
      textAlign: "center"
    },
    
    calcBTN: {
      backgroundColor: '#3c3c3d',
      display: "relative",
      width: 140,
      height: 60,
      justifyContent: 'center',
    },

    output: {
      textAlign: "left",
      marginTop: 20,
      fontSize: 22,
      backgroundColor: '#456aff',
      padding: 10,
      paddingLeft: 20,
      color: 'white'
    },
  });

