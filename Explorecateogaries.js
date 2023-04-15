import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

const Explorecateogaries = () => {
  const items = [
    {
      id: 1,
      name: 'Fruits',
      description: '20 items',
      image: require('./assets/FAV.png'),
    },
    {
      id: 2,
      name: 'Oil and Masala',
      description: '20 items',
      image: require('./assets/OAM.png'),
    },
    {
      id: 3,
      name: 'Baked Goods',
      description: '20 items',
      image: require('./assets/bread.png'),
    },
    // add more items as needed
  ];

  return (
    <FlatList
      data={items}
      horizontal={true}
      renderItem={({ item }) => (
        <TouchableOpacity>
        <View style={{ padding: 10 }}>
          <Image
            style={{ width: 100, height: 100 }}
            source={item.image}
          />
          <Text>{item.name}</Text>
          <Text>{item.description}</Text>
        </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default Explorecateogaries;
