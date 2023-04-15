import React, { useEffect } from 'react';
import SplashScreen from 'react-native-animated-splash-screen';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView,TextInput, ImageBackground } from 'react-native';
import { Dimensions } from 'react-native';
import { useState } from 'react';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';
import Explorecateogaries from './Explorecateogaries';
import Popularcateogaries from './Popularcateogaries';
import Dummy from './Dummy';
import Itemsfav from './Itemsfav';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
function HomeScreen({ navigation }) {const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5000 milliseconds or 5 seconds
  }, []);
  if (isLoading){
  return (
    <SplashScreen
      logoImage={require('./assets/Groceyish2.png')}
      logoWidth={width}
      logoHeight={height}
      logoAnimation="zoomin"
      backgroundColor="#00BF63"
    />);}
  return(
  <View style={styles.container}>
    <View style={styles.header}>
        <Image source={require('./assets/app_logo.png')} style={styles.logo} />
        <TouchableOpacity>
          <Icon name="bars" size={25} color="#000" />
        </TouchableOpacity>
    </View>
    <View style={styles.searchBar}>
          <TextInput
            placeholder="Search for items..."
            style={styles.searchInput}
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
          <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
    </View>
    <ScrollView>
    <View style={styles.dealsSection}>
      <ImageBackground source={require('./assets/topbanner.png')} style={styles.dealbanner}
      >
        <TouchableOpacity style={styles.dealviewall} onPress={() => navigation.navigate('Dummy')}>
          <Text style={styles.buttonText}>View Products</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
    <View style={styles.categoriesSection}>
      <Text style={styles.sectionTitle}>Explore Categories</Text>
      <TouchableOpacity style={styles.dealviewall1} onPress={() => navigation.navigate('Dummy')}>
        <Text style={styles.buttonText1}>View All</Text>
      </TouchableOpacity>
      <Explorecateogaries />
    </View>
    <View style={styles.categoriesSection}>
      <Text style={styles.sectionTitle}>Popular Categories</Text>
      <TouchableOpacity style={styles.dealviewall1} onPress={() => navigation.navigate('Dummy')}>
        <Text style={styles.buttonText1}>View All</Text>
      </TouchableOpacity>
      <Popularcateogaries />
    </View>
    <View style={styles.featuredSection}>
      <Text style={styles.sectionTitle}>Featured Products</Text>
      <Itemsfav />
    </View>
    </ScrollView>
  </View>
);
  };
  const Stack = createNativeStackNavigator();
  export default function App() {
    return (<NavigationContainer>
      <Stack.Navigator initialRouteName="Homescreen">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Dummy" component={Dummy} options={{ headerShown: false }}/>
        <Stack.Screen name="Popularcateogaries" component={Popularcateogaries} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingTop: 20,
      paddingBottom:20
    },
    logo: {
      width: 150,
      height: 40,
    },
    appName: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft:5
    },
    menuButton: {
      backgroundColor: '#ccc',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
    },
    buttonText: {
      fontSize: 14,
      color: 'white',
    },
    dealsSection: {
      paddingVertical: 10,
      paddingTop:25
    },
    categoriesSection: {
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    popularSection: {
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    featuredSection: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    viewButton: {
      backgroundColor: '#ccc',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
      },
      searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eee',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginHorizontal:22
      },
      searchIcon: {
        marginRight: 10,
      },
      searchInput: {
        flex: 1,
        fontSize: 18,
        paddingVertical: 8,
      },
      dealbanner:{
          width:390,
          height:190,
      },
      dealviewall:{
        position: 'absolute',
        top: 120,
        left: 16,
        backgroundColor: '#3BB77E',
        padding: 7,
        borderRadius: 5,
      },
      dealviewall1:{
        position: 'absolute',
        top: 10,
        left: 300,
        backgroundColor: 'white',
        padding: 7,
        borderRadius: 5,

      },
      buttonText1: {
        fontSize: 14,
        color: '#3BB77E',
      },
    });
