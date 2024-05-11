import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Header from '../components/header';
import Latest from '../components/latest';
import {MaterialIcons} from '@expo/vector-icons';


export default function FloatingBtn() {
  const [visible, setVisible] = useState(false);

    const handlePress = ()=>{
        setVisible(!visible);
    };

return(
  <View style={styles.container}>
    
        <TouchableOpacity onPress={handlePress} style={styles.floatingbtn}>
          <MaterialIcons name='home' size={24} color='white' />
        </TouchableOpacity>
        {visible && (<View style={styles.btnContainer}>
         <TouchableOpacity style={styles.button} >
            <Text style={{color: 'white'}}>Quotes</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.button} >
            <Text style={{color: 'white'}}>Glossary</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.button} >
            <Text style={{color: 'white',}}>About</Text>
         </TouchableOpacity>

        </View>)}
      
    </View>
  
);
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  floatingbtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 40,
    height: 60,
    width: 60,
    backgroundColor: 'midnightblue',
    borderRadius: 50,
    padding: 12,
},
btnContainer: {
  position: 'absolute',
  bottom: 65,
  right: 20,
  borderRadius: 50,
  padding: 12,
},
button: {
    backgroundColor: 'midnightblue',
    borderRadius: 5,
    padding: 12,
    marginBottom: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
  
});
