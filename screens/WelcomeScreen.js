import * as React from 'react';
import { View, Image, Text, StyleSheet, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return ( 
  <View style={style.container}>
      <Image
        source={require("../assets/little-lemon-logo.png")}
        style={style.logo}
        resizeMode="contain"
        />

        <Text style={style.welcomeText}>
          Little Lemon, Your local Mediterranean Bistro
        </Text>

        <Pressable onPress={() => navigation.navigate("Subscribe")}>
        <Text style={style.buttonText}>
          Newsletter
        </Text>
        </Pressable>
  </View>
  )
 ;
};


const style= StyleSheet.create({
  container:{
    textAlign:"center",
    alignItems:"center",
    justifySelf:"center",
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  welcomeText:{
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    fontWeight:"bold",
    textAlign: 'center',
  },
  logo:{
    height:250,
    width:150,
    padding:40,
    marginTop:50
  },
  buttonText:{
    borderRadius:20,
    color: '#fff',
    fontSize:30,
    backgroundColor: '#495E57', 
    marginTop:70,
    padding:10,
    width:300,
    textAlign:"center"
  },
})
export default WelcomeScreen;
