import React, { Component, PropTypes } from 'react';
import {
	Text,
    View,
    StyleSheet,
    Button
} from 'react-native';

export class First extends Component{
 
    render(){
        const { goBack} = this.props.navigation;
        return(
            <View style={styles.screen}>
                <Text>This is a test</Text>
                <Button
                    title="This is Test"
                    onPress={() => goBack()}
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
    }
  });

export default (First);