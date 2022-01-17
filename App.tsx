import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';

const App = () => {

  const buttonOnPress = () => {
    console.log("contoh function")
  }

  const imageSource = {
    uri:"https://reactnative.dev/img/tiny_logo.png"
  }

  const localImageSource = require('./images/ASD.png')


  return (
    <SafeAreaView style={styles.base}>
      <View style={styles.backgroundView}>
        <Text style={styles.sampleText}>Hello world!</Text>
        <Button title='Tombol' onPress={buttonOnPress}></Button>
        <TouchableOpacity onPress={buttonOnPress}>
          <View style={styles.button}>
            <Text> Touchable</Text>
          </View>
          </TouchableOpacity>
          <Image 
            style={styles.image}
            source={localImageSource}
          ></Image>
          <Image 
            style={styles.image}
            source={localImageSource}
          ></Image>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  base:{
    display: "flex",
    flex: 1
  },

  backgroundView: {
    backgroundColor: "grey",
    height: "50%"
  },

  sampleText: {
    color: "white",
    fontSize: 24
  },

  button: {
    backgroundColor: "red",
    height: 50,
    width: 50
  },

  image: {
    height: 100,
    width: 100
  }
});

export default App;
