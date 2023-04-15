import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import Dummy from './Dummy';
import { useNavigation } from '@react-navigation/native';
import Plusminus from './Plusminus';
const Itemsfav = () => {
  const navigation = useNavigation();
  
  const [selectedValue, setSelectedValue] = useState(null);

  const items = [
    {
      id: 1,
      image: require('./assets/fandv.png'),
      cat: 'Fruits & Vegetables',
      name:'Reddish',
      price: 120,
      count: 0
    },
    {
      id: 2,
      image: require('./assets/fandv.png'),
      cat: 'Fruits & Vegetables',
      name:'Reddish',
      price: 120,
      count: 0
    },
    {
      id: 3,
      image: require('./assets/fandv.png'),
      cat: 'Fruits & Vegetables',
      name:'Reddish',
      price: 120,
      count: 0
    },
    // add more items as needed
  ];

  return (
    <FlatList
      data={items}
      horizontal={true}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Dummy')}>
          <View style={{ padding: 10 }}>
            <ImageBackground
              style={{ width: 180, height: 100 }}
              source={item.image}>
            </ImageBackground>
            <Text>{item.cat}</Text>
            <Text style={{fontSize:18,fontWeight:'bold'}}>{item.name}</Text>

          </View>
          <Plusminus />
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 14,
    color: 'white',
  },
  dealviewall:{
    position: 'absolute',
    top: 95,
    left: 10,
    backgroundColor: '#3BB77E',
    padding: 7,
    borderRadius: 5,
  }
});

export default Itemsfav;
