import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import Header from '../components/header';

export default function App() {

    const [places, setPlaces] = useState([
      { text: 'Opon-Valley', key: '1'},
      { text: 'Dunkwa-on-Offin', key: '2'},
      { text: 'Kumasi', key: '3'},
      
      
    ]);
return(
  <View>
<Header />

<View style={styles.container}>
  <View style={styles.list}><FlatList 
  data={places} 
  renderItem={({item}) => (<Text>{item.text}</Text>)}/></View>
</View>
  </View>
  

  
);
  
}

const styles = StyleSheet.create({
  container: { 
    
    backgroundColor: '#fff',
    padding: 24,
   
   // alignItems: 'center',
    //justifyContent: 'space-around',
    

  },
  item: {
    backgroundColor: 'midnightblue',
    padding: 30,
    marginTop: 24,
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
  list: {
    
  }
});
