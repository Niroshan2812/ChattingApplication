import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigation';


export default function App() {
  return (
    <View style={styles.container}>

      <Navigator/>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical:50,
    paddingTop:1,


    
  },
});

// Stop time is  ---- 1.16