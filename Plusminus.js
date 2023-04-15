import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Plusminus = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDecrement}>
        <AntDesign name="minus" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.counterText}>{count}</Text>
      <TouchableOpacity onPress={handleIncrement}>
        <AntDesign name="plus" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  counterText: {
    marginHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Plusminus;
