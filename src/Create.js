import { useState } from "react"
import { Alert, View } from "react-native"
import { Button, Text,TextInput } from "react-native-paper"
import auth from '../Firebase/Firebase'


const Register= ()=>{
    const[email, setEmail]= useState("")
    const[pass, setPass]= useState("")
    const create=()=>{
        auth().createUserWithEmailAndPassword(email,pass)
        .then(()=> Alert.alert("dc roi"))
        .catch(e=> Alert.alert(e.message))
    }
    return(
        
        <View style={{flex:1,justifyContent:"center"}}>
            
            <TextInput 
                value={email} 
                onChangeText={setEmail} 
                label={"Email"}>
            </TextInput>
            <TextInput 
                secureTextEntry 
                value={pass} 
                onChangeText={setPass} 
                label={"Pass"}>
            </TextInput>
        <Button 
        onPress={create} 
        mode="contained" >
            Create
            </Button>
           
            
        </View>
    )
}
export default Register;