import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'

import { THEME } from '../theme'

export const TodoScreen = ({ goBack, todo }) => {
    return (
        <View >
            <Text>{ todo.title }</Text>
            <View style={styles.buttons}>
                <View style={styles.btn}>
                    <Button 
                        title='Назад' 
                        color={THEME.GREY_COLOR}
                        onPress={goBack}
                    />
                </View>
                <View style={styles.btn}>
                    <Button 
                        title='Удалить' 
                        color={THEME.DANGER_COLOR}
                        onPress={() => console.log('to remove')}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn: {
        width: '40%'
    }
})
