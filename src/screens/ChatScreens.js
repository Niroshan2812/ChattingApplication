import { View, Text,FlatList } from 'react-native';
import chats from '../../assets/data/chats.json';
import ChartListItem from '../component/Chatlist'

const ChartScreens = () => {
    return (
        <FlatList data={chats} renderItem={({ item }) => <ChartListItem chat={item}/>} />
    );
};
export default ChartScreens;