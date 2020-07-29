import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'

import { THEME } from '../theme'
import { AppCard } from '../components/ui/AppCard'

export const TodoScreen = ({ goBack, todo, onRemove }) => {
    return (
        <View >

            <AppCard style={styles.appcard}>
            <Text style={styles.title}>{ todo.title }</Text>
            <Button title='Редактировать' />
            </AppCard>

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
                        onPress={() => onRemove(todo.id)}
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
    appcard: {
        marginBottom: 20,
        padding: 15
    },
    btn: {
        width: '40%'
    },
    title: {
        fontSize: 20
    }
})
