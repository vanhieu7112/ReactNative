import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image
} from 'react-native';

export default class Menu extends Component {

    render() {
        // console.log(this.props);
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Menu</Text>
                <Button
                    onPress={() => navigate('Authentication')}
                    title="Open Authentication"
                />
                <Button
                    onPress={() => navigate('ChangeInfo')}
                    title="Open ChangeInfo"
                />
                <Button
                    onPress={() => navigate('OrderHistory')}
                    title="Open OrderHistory"
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00BCD4',
     
    },
});
