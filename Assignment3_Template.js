import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Picker, Item } from '@react-native-picker/picker';

export default function App() {
  const [selectedVeg, setSelectedVeg] = useState("$0");
  const [selectedVegQuant, setSelectedVegQuant] = useState("0");
  const [selectedFruit, setSelectedFruit] = useState("$0");
  const [selectedFruitQuant, setSelectedFruitQuant] = useState("0");

  const [price, setPrice] = useState("");

  calculatePrice = () => {
    const vegValue = selectedVeg.split("$");
    const fruitValue = selectedFruit.split("$");

    let vegPrice = parseInt(vegValue[1]);
    let fruitPrice = parseInt(fruitValue[1]);
    let vegQuant = parseInt(selectedVegQuant);
    let fruitQuant = parseInt(selectedFruitQuant);

    let price = parseInt((vegPrice * vegQuant) + fruitPrice * fruitQuant);

    if (vegPrice === 0 && fruitPrice === 0) {
      setPrice("Please select an item.");
    }
    else if (vegQuant < 1 && fruitQuant < 1) {
      setPrice("Please select a quantity.")
    }
    else if (price === 0) {
      setPrice("Please select at least one item having a quantity of 1.");
    }
    else {
      setPrice("    $" + price);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}> Produce Owners Group App </Text>
        <Image
          style={styles.image}
          source={{ uri: 'https://cdn.discordapp.com/attachments/1214345556487307315/1241634362265440296/7102583091_746d99b373_b.png?ex=664ae99c&is=6649981c&hm=9280b494e8c1002417805d87f0bc3aa2c132ffd2fa3f460e0d29a5cc98c08fe1&', }}
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
            <Picker.Item label="Select items" value="$0" />
            <Picker.Item label="Carrot - $8" value="Carrot - $8" />
            <Picker.Item label="Potato - $5" value="Potato - $5" />
            <Picker.Item label="Cabbage - $8" value="Cabbage - $8" />
            <Picker.Item label="Pumpkin - $5" value="Pumpkin - $5" />
            <Picker.Item label="Beetroot - $5" value="Beetroot - $5" />
          </Picker>

          <Picker
            style={styles.quantityPicker}
            selectedValue={selectedVegQuant}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedVegQuant(itemValue)
            }>
            <Item label="0" value="0" />
            <Item label="1" value="1" />
            <Item label="2" value="2" />
            <Item label="3" value="3" />
            <Item label="4" value="4" />
            <Item label="5" value="5" />
          </Picker>
        </View>

        <View style={styles.pickers}>
          <Picker
            style={styles.itemPicker}
            selectedValue={selectedFruit}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedFruit(itemValue)
            }>
            <Picker.Item label="Select item" value="$0" />
            <Picker.Item label="Blueberry - $12" value="Blueberry - $12" />
            <Picker.Item label="Orange - $11" value="Orange - $11" />
            <Picker.Item label="Lemon - $12" value="Lemon - $12" />
            <Picker.Item label="Peach - $11" value="Peach - $11" />
            <Picker.Item label="Banana - $12" value="Banana - $12" />
          </Picker>

          <Picker
            style={styles.quantityPicker}
            selectedValue={selectedFruitQuant}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedFruitQuant(itemValue)
            }>
            <Item label="0" value="0" />
            <Item label="1" value="1" />
            <Item label="2" value="2" />
            <Item label="3" value="3" />
            <Item label="4" value="4" />
            <Item label="5" value="5" />
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
  );
}

const styles = StyleSheet.create({

  container: {
    flexDirection: 'column',
    flex: 5,
    backgroundColor: '#e6e6e6'
  },

  header: {
    flex: 1.2,
    backgroundColor: 'e6e6e6'
  },

  body: {
    flex: 4,
    backgroundColor: 'e6e6e6'
  },

  footer: {
    position: "absolute",
    bottom: 0,
    marginBottom: 5,
    width: "100%",
    padding: 10,
    flex: .25,
    backgroundColor: 'lightblue'
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
    
    alignSelf: 'center',
    width: '100%',
    height: 120
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
    marginTop: 30,
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
    borderRadius: 15
  },

  output: {
    textAlign: "left",
    marginTop: 30,
    fontSize: 22,
    backgroundColor: '#456aff',
    padding: 10,
    paddingLeft: 20,
    color: 'white'
  },
});
