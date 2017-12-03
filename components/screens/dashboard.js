import React from 'react';
import { StyleSheet, Text, TextInput,View, Button, FlatList, ActivityIndicator} from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'
import qrScreen from './qr'






class Dashboard extends React.Component {

  static navigationOptions = {
    title: "Dashboard",
  };

  constructor(props) {
    super(props);
    this.state = {  

        rooms:[],
        modalVisible: false

    }

  }

  toggleModal(visible) {
    this.setState({ modalVisible: visible });
 }

  
  keyExtractor = (item, index) => item.id  



  render() {
  
    return (
      <View style={styles.container}>


    <Button>Add Room</Button>

      {this.state.room == 0 && <Text>You currently don't have any rooms added. Click to add rooms</Text>}

      <Modal animationType = {"slide"} transparent = {false}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               <View style = {styles.modal}>
                  <Text style = {styles.text}>Modal is open!</Text>
                  
                  <Button onPress = {() => {
                     this.toggleModal(!this.state.modalVisible)}}>
                     
                     <Text style = {styles.text}>Close Modal</Text>
                  </Button>
               </View>
            </Modal>




      </View>
    );
  }
}

const moveToNext = StackNavigator({
 Home: { screen: qrScreen },
});

export default moveToNext;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'
  },
});
