import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import React, {useEffect} from 'react';

export default function App() {

  const [teksti, setTeksti] = React.useState('Guess a number between 1-100');
  const [arvaus, setArvaus] = React.useState(0);
  const [arvattava, setArvattava] = React.useState(Math.floor(Math.random() * 100) + 1);
  const [maara, setMaara] = React.useState(1); 

  useEffect(() => {
    setArvattava;
  });
  
  const arvaa = () => {

    setMaara(maara + 1);

    if(arvaus < arvattava){
      setTeksti("Your guess " + arvaus + " is too low");
    }
    else if(arvaus > arvattava){
      setTeksti("Your guess " + arvaus + " is too high")
    }
    else{
      Alert.alert("You guessed the number in " + maara + " guesses")
    };
    
  }

  return (
   
    <View style={styles.container}>
      <Text style={styles.text}>{teksti}</Text>
      <TextInput 
      style={styles.input}
      onChangeText={setArvaus}
      value={arvaus}
      keyboardType='numeric'></TextInput>
      <Button
      onPress={arvaa}
      title="MAKE GUESS"
      ></Button>
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
  input: {
    borderWidth: 1,
    margin: 12,
    padding: 10,
    width: 100,
  },
  text: {
    fontSize: 20, 
  },
});
