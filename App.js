import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [number, setNumber] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 50}}>Result : {number}</Text>
      <View style={{flexDirection: "row", gap: 10}}>
      <Button title="UP" onPress={()=> setNumber(number + 1)}/>
      <Button title="DOWN" onPress={()=> setNumber(number - 1)} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
