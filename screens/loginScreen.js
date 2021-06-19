import * as React from "react";
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import firebase from "firebase";
import db from "../config";
import SantaAnimation from "../components/lotteAnimation";

export default class LoginScreen extends React.Component{
    constructor(){
        super();
       this.state={
           email: "",
           password:"",
       }
    }

    loginFunction = async (email, password)=>{
      firebase.auth().signInWithEmailAndPassword(email,password)
      .then(()=>{
          return(
              alert("Login Succesfull!")
          )
      })
      .catch(()=>{
        return(
            alert("Wrong Email or Password!")
        )
      })
    }

    signUpFunction = async (email, password)=>{
     firebase.auth().createUserWithEmailAndPassword(email,password)
     .then((response)=>{
      return(
          alert("User Added Succesfully!")
      )
     })
     .catch((error)=>{
       return(
           alert("Error Registering User!")
       )
     })
    }

    render(){
        return(
        <View styles={styles.container}>
        <SantaAnimation/>
        <TextInput
        placeholder="Enter An Email"
        style={styles.ti}
        onChangeText={(text)=>{
        this.setState({
            email: text,       
         })
        }}></TextInput>
        <TextInput
        placeholder="Enter The Password"
        style={styles.ti}
        onChangeText={(text)=>{
         this.setState({
             password: text
         })
        }}/>
        <TouchableOpacity style={styles.to}
        onPress={()=>{
           this.loginFunction(this.state.email, this.state.password);
        }}>
            <Text style={styles.text}>Login!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.to}
            onPress={()=>{
                this.signUpFunction(this.state.email, this.state.password);
            }}>
             <Text style={styles.text}>Sign Up!</Text>
            </TouchableOpacity>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ti:{
    borderWidth: 2, 
    marginBottom: 10,
    width: 200
    },
    to:{
        backgroundColor: "red",
        alignSelf: "center",
        width: 70,
        height: 30,
        marginBottom: 10
    },
    text:{
        color: "#fff",
        alignSelf: "center",
        fontWeight: "bold",
        marginTop: 3,
    }
})