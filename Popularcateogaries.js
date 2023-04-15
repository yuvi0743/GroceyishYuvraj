import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground,StyleSheet} from 'react-native';
import Dummy from './Dummy';
import {useNavigation} from '@react-navigation/native';
const Popularcateogaries = () => {
  const navigation = useNavigation();
  const items = [
    {
      id: 1,
      image: require('./assets/popularcollection.png'),
    },
    {
      id: 2,
      image: require('./assets/popularcollection.png'),
    },
    {
      id: 3,
      image: require('./assets/popularcollection.png'),
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
          <ImageBackground
            style={{ width: 250, height: 150 }}
            source={item.image}
            >
              <TouchableOpacity style={styles.dealviewall} onPress={() => navigation.navigate('Dummy')}>
          <Text style={styles.buttonText}>View Products</Text>
        </TouchableOpacity>
            </ImageBackground>
        </View>
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
export default Popularcateogaries;
