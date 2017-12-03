import React from 'react';
import { StyleSheet, Text, TextInput,View, ActivityIndicator} from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'
import * as firebase from 'firebase'
import {Button} from 'react-native-elements'
import { StackNavigator } from 'react-navigation'
import dashScreen from './components/screens/dashboard'



// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCXoeLVSeoTw40e2AORLRV0tIMwpZpkYng",
  authDomain: "ack-f60dc.firebaseapp.com",
  databaseURL: "https://hack-f60dc.firebaseio.com",
  storageBucket: "hack-f60dc.appspot.com"
};

firebase.initializeApp(firebaseConfig);


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

  renderButtonOrSpinner() {
    if (this.state.loading) {
        return <ActivityIndicator/> 
    }

  }

  

  onLoginPress = ()=>{
    this.setState({ error: '', loading: true });

    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => { this.setState({ error: '', loading: false }); 
      })
      .then(()=>{

        this.props.navigation.navigate('Dash')
      })
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

{this.renderButtonOrSpinner()}

      <Text
      style={{fontSize:20, alignSelf:'center'}}>Sign in </Text>

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
secureTextEntry
value={this.state.password}
onChangeText={password=>this.setState({password})}/>

<Button
  buttonStyle={{ backgroundColor: 'purple', margin:3}}
  textStyle={{textAlign: 'center'}}
  title={`Login`}
  onPress={this.onLoginPress}
/>

<Text style={{color: '#E64A19',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10}}>{this.state.error}</Text>
      </View>
    );
  }
}

const moveToNext = StackNavigator({
  Login: { screen: Login },
 Dash: { screen: dashScreen },
});

export default moveToNext;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'
  },
});
