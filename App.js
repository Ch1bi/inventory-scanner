import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api from './components/api'
import {Button} from 'react-native-elements'
import { FormLabel, FormInput } from 'react-native-elements'


export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }

  }


  loginWithGoogle = (token) =>{

    const credential = firebase.auth.GoogleAuthProvider.credential(null, token);
    return firebase.auth().signInWithCredential(credential);
  }

  someFunc = ()=>{


  }
  render() {
    return (
      <View style={styles.container}>
        <Text
        style={{color:'white'}}>Open up App.js to start working on your app!</Text>

<FormLabel>Name</FormLabel>
<FormInput onChangeText={someFunction}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
