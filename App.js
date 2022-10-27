import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChartScreens from './src/screens/ChatScreens';
import ChartScreen from './src/screens/ChatScreen';

export default function App() {
  return (
    <View style={styles.container}>

      <ChartScreen/>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingVertical:50,
  },
});

// Stop time is  ---- 1.16