import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, Image  } from 'react-native'
import React, {setState} from 'react';


const Latest = () => {
    const images = [
        {key: 1, image: require('../img/img_1.jpg')},
        {key: 2, image: require('../img/img_2.jpg')},
        {key: 3, image: require('../img/img_1.jpg')},
        {key: 4, image: require('../img/img_2.jpg')},
        {key: 5, image: require('../img/img_1.jpg')}
    ]

  return (
    <View>
    
    <View style={{padding: 10,}}>
    <ScrollView>
        <Text>Hello</Text>
     <FlatList horizontal={true} data={images} renderItem={({ item }) => (
        <TouchableOpacity >
            <Image source={item.image}  style={styles.image}/>
        </TouchableOpacity> )}/>

        <FlatList horizontal={true} data={images} renderItem={({ item }) => (
        <TouchableOpacity >
            <Image source={item.image}  style={styles.image}/>
        </TouchableOpacity> )}/>
        <Text>Hello</Text>
        <FlatList horizontal={true} data={images} renderItem={({ item }) => (
        <TouchableOpacity >
            <Image source={item.image}  style={styles.image}/>
        </TouchableOpacity> )}/>
        </ScrollView>
    </View>
    
    </View>
  )
}

export default Latest

const styles = StyleSheet.create({
    image: {
        margin: 5,
        width: 100,
        height: 160,
    }
})