import { useState } from 'react';
import {View, Text,StyleSheet, TextInput} from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons'; 

const inputBox =()=>{
    const[newMessage, sentNewMessage] = useState('');
    const onSend =() =>{
        console.warn('Sending a new message', newMessage);

        sentNewMessage('');
        
    }


    return(
        <View style ={styles.containner}>
           <AntDesign name="plus" size={20} color="royalblue" />
            <TextInput value={newMessage} onChangeText={sentNewMessage} style={styles.input} placeholder='Type Your message..'/>


            <MaterialIcons onPress={onSend} style={styles.send} name ='send' size={24} color='white'/>
        </View>
    );
};
const styles =StyleSheet.create({
    containner:{
        flexDirection:'row',
        backgroundColor:'whitesmoke',
        padding:5,
        paddingHorizontal:10,
        alignItems:'center',

    },
    input:{
        flex:1,
        backgroundColor:'white',
        padding:5,
        paddingHorizontal:10,
        marginHorizontal:10,
        borderRadius:50,
        borderColor:'lightgray',
        borderWidth:StyleSheet.hairlineWidth,



    },
    send:{
        backgroundColor:'royalblue',
        padding:7,
        borderRadius:15,
        overflow:'hidden', 
    },

});
export default inputBox;