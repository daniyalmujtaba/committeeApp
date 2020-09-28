import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class DashboardScreen extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.text} >Welcome user</Text>
                <Button title= 'Sign Out' onPress={()=>this.props.navigation.navigate('LoginScreen')}></Button>
            
            </View>

        );
    }
}

export default DashboardScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text : {
        fontSize:30,
    }
  });
  
