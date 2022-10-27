import { NavigationContainer } from '@react-navigation/native'; 
import{createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import ChatScreen from '../screens/ChatScreen';
import ChatsScreen from '../screens/ChatScreens';
import MainTabNavigator from '../navigation/MainTabNavigator';

const Stack =createNativeStackNavigator();



const Navigator =()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Chats'>
                <Stack.Screen name = 'Home' component={MainTabNavigator} options={{headerShown:false}}/>
                <Stack.Screen name='Chats' component ={ChatsScreen}/>
                <Stack.Screen name='Chat' component ={ChatScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Navigator;