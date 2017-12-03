import React from 'react';
import { StyleSheet, Text, TextInput,View, FlatList, ActivityIndicator} from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'
import {Button} from 'react-native-elements'
import { StackNavigator } from 'react-navigation'
import qrScreen from './components/screens/qr'





class Dashboard extends React.Component {

  static navigationOptions = {
    title: "Dashboard",
  };

  constructor(props) {
    super(props);
    this.state = {  

        rooms:[]

    }

  }

  




  render() {
  
    return (
      <View style={styles.container}>


      {this.state.room == 0 && <Text>You currently don't have any rooms added. Click to add rooms</Text>}


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
