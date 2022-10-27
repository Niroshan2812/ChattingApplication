import { useEffect } from 'react';
import {ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView, Platform} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Message from '../component/Message'
import  InputBox from'../component/inputBox';
import bg from '../../assets/images/BG.png';
import messages from '../../assets/data/messages.json';


const ChatScreen =()=>{

    const route =useRoute();
    const navigation =useNavigation();
    


    useEffect(() => { 
        navigation.setOptions({title: route.params.name});
    },[route.params.name]);

    return(
        <KeyboardAvoidingView
        behavior={Platform.OS ==="ios" ? "padding =8":"height =10"}
        style={styles.bg}
        >
        <ImageBackground source={bg} style = {styles.bg}>
            
        <FlatList 
          data={messages}
          renderItem={({item}) => <Message message={item}/>} 
          style ={styles.list} 
          inverted
           />
            <InputBox/>
        </ImageBackground>
       </KeyboardAvoidingView>

    );
};
const styles =StyleSheet.create({
bg:{
    flex:1,
},
list:{
    padding:10,
}

});

export default ChatScreen;