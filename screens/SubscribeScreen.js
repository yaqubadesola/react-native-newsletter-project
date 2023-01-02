import React,{useState} from 'react';
import { ScrollView, View, Text, TextInput, Pressable, StyleSheet, Image,KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { validateEmail } from '../utils';
const SubscribeScreen = () => {
  // Add subscribe screen code here
  
  const [validEmail, SetValidEmail] = useState(false); 
  const [email, onChangeEmail] = useState(''); 
  const alertMsg = (email) => {
    onChangeEmail(email)
    SetValidEmail(false)
    Alert.alert("Thank you for subscribing, stay tunned!")
  }
  const checkEmail = (email) => {
    if(email !== ""){
      if(validateEmail(email)){
        SetValidEmail(true)
        //console.log("Valid email", {email:validEmail})
      }else{
        SetValidEmail(false)
        //console.log("InValid email", {email:validEmail})
      }
    }else{        
      SetValidEmail(false)
    }
    
     
  }
  return(
    <ScrollView keyboardDismissMode='on-drag'>
      <View style={myStyles.container}>
        <Image
          source={require("../assets/little-lemon-logo-grey.png")}
          style={myStyles.logo}
          resizeMode="contain"
        />

        <Text style={myStyles.welcomeText}>
          Subscribe to our newsletter for our latest delicious recipes!
        </Text>
        <KeyboardAvoidingView style={myStyles.inputContainer} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TextInput 
              style={myStyles.input} 
              value={email} 
              onChangeText={onChangeEmail}
              onBlur={() => checkEmail(email)}
              placeholder={'Email'} 
            /> 
        </KeyboardAvoidingView>
       
        <Pressable  
        onPress={() => {
                  alertMsg({email:""})
              }}
        disabled={validEmail? false : true}
        >
            <Text style={{
                      color:"white",
                      backgroundColor:validEmail && email !== ""?'#495E57' : '#e6e6e6' , 
                      color:"#fff",
                      width:320,
                      borderRadius:10,
                      fontSize:20,
                      textAlign:"center",
                      padding:10,
                      marginTop:10
                  }}>
              Subscribe
            </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};


const myStyles = StyleSheet.create({ 
  container: { 
      alignItems:"center",
      justifySelf:"center",
      flex:1,
  }, 
  input: { 
      height: 40, 
      margin: 12, 
      borderRadius:10,
      width:"90%",
      borderWidth: 1, 
      padding: 10, 
      fontSize: 16, 
      borderColor: 'EDEFEE', 
   }, 
   inputContainer: { 
    width:"95%",  
   }, 
  welcomeText:{
    fontSize: 20,
    padding: 20,
    marginVertical: 8,
    fontWeight:"bold",
    textAlign: 'center',
  },
  logo:{
    height:150,
    width:100,
    padding:40,
    marginTop:50
  }, 
  }); 
export default SubscribeScreen;
