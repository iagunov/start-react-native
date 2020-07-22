import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


export const Navbar = (props) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>My Buy</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    text: {

    }
})
