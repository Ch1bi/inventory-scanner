import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api from './components/api'
import {Button} from 'react-native-elements'
import { FormLabel, FormInput } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'
import qrScreen from './components/screens/qr'

class Login extends React.Component {

  static navigationOptions = {
    title: "Login",
  };

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
 

<Button
  buttonStyle={{ backgroundColor: 'purple'}}
  textStyle={{textAlign: 'center'}}
  title={`Login`}
  onPress={() =>this.props.navigation.navigate('Home')}
/>
      </View>
    );
  }
}

const moveToNext = StackNavigator({
  Login: { screen: Login },
 Home: { screen: qrScreen },
});

export default moveToNext;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
