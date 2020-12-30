import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import * as Google from 'expo-google-app-auth';
import firbase from 'firebase';

class LoginScreen extends Component {
    
    
    render () {
        return (
            <View style={styles.container}>
                <Button title= 'Sign in with google' onPress={()=>this.props.navigation.navigate('DashboardScreen')}></Button>
            </View>

        );
    }
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
