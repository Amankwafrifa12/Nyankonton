import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Header = () => {
  return (
    <View style={styles.header}> 
      <Text style={styles.title}>Nyankonton</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        margin: 0,
        backgroundColor: 'midnightblue',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    }
    
})