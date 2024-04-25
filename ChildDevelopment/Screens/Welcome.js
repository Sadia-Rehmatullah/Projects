import React from "react";
import {View, StyleSheet, Image, Text, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


 const DisplayAnImageWithStyle = ({navigation}) => {
    const start = () => {
        navigation.navigate('Login');
      };
    
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../images/logo.png')}
        />
        <Text style={styles.Heading}>Pathway to Brilliance</Text>
        <Text style={styles.subheading}>Comprehensive Child Development App for Holistic Growth in All Domains</Text>
        <TouchableOpacity onPress={start}>
            <Text style = {styles.text}>
               Let's Explore
            </Text>
            
         </TouchableOpacity>
      </View>
    );
  };
 
  export default DisplayAnImageWithStyle;

  const styles = StyleSheet.create({
    container: {
      backgroundColor:'#1D1160',
      
    },
    image: {
      width: 400,
      height: 400,
      resizeMode: 'cover',
      
    },
    Heading:
    {   
        color:'white',
        fontWeight:'bold',
        fontSize: 26,
        padding:10,
    },
    subheading:
    {
       color:'white',
       fontWeight:'400',
       fontSize: 22,
       padding:10,
    },
    
    text: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'maroon',
        color:'white',
        textAlign:'center',
        fontSize:24,
        alignSelf:'center',
        margin:20,
        padding:10,
        paddingLeft:30,
        paddingRight:30,
        borderRadius:10,
     },
     button:
     {   marginTop:30,
         paddingBottom:20,

     },
  });