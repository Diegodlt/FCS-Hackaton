import React, { Component, PropTypes } from 'react';
import {
	Text,
    View,
    StyleSheet,
    Button
} from 'react-native';



export class HomeScreen extends Component{
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.screen}>
                <Text style={styles.title}>HomeScreen</Text>
                <Button
                    title="First"
                    onPress={() => navigate('First')}
                />
            </View>
        );
       
    }
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title:{
        fontSize: 30,
        marginBottom: 20
    }
  });

export default (HomeScreen);