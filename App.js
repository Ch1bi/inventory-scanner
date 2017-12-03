import React from 'react';
import { StyleSheet, Text, TextInput,View } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'
import api from './components/api'
import {Button} from 'react-native-elements'
import { StackNavigator } from 'react-navigation'
import qrScreen from './components/screens/qr'

class Login extends React.Component {

  static navigationOptions = {
    title: "Login",
  };

  constructor(props) {
    super(props);
    this.state = {

    email: '', 
    password: '', 
    error: '', 
    loading: false

    }

  }

  onLoginPress() {
    this.setState({ error: '', loading: true });

    const { email, password } = this.state;
    api.auth().signInWithEmailAndPassword(email, password)
        .then(() => { this.setState({ error: '', loading: false }); })
        .catch(() => {
            //Login was not successful, let's create a new account
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => { this.setState({ error: '', loading: false }); })
                .catch(() => {
                    this.setState({ error: 'Authentication failed.', loading: false });
                });
        });
}


  render() {
  
    return (
      <View style={styles.container}>

      <Text
      style={{fontSize:20, alignSelf:'center'}}>Sign in with your Google Account</Text>

<FormLabel>Email</FormLabel>

<FormInput 
placeholder="Please enter your email"
autoCorrect={false}
value={this.state.email}
onChangeText={email=>this.setState({email})}/>


<FormLabel>Password</FormLabel>
<FormInput
style={{alignSelf:"center"}} 
placeholder="Please enter your password"
autoCorrect={false}
value={this.state.password}
onChangeText={email=>this.setState({email})}/>

<Button
  buttonStyle={{ backgroundColor: 'purple', margin:3}}
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
    justifyContent:'center'
  },
});
