import React from 'react';
import {StackNavigator} from 'react-navigation'

export default class qrScreen extends React.Component {
    
      constructor(props){
        
            super(props)
            this.state = {
        
             
            }
        
          }
    
      static navigationOptions = {
        title: 'Scan',
      }
    
     
    
    
    
      render() {
    
   
    
        return (
          <View>
          
           <Text>QR Things go hea!</Text>
          </View>
        );
      }
    }