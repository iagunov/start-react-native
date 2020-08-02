import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { THEME } from '../theme'

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
        } else {
            Alert.alert('Заметка не должна быть пустой')
        }
        
    }

    return (
        <View style={styles.block}>
            <TextInput 
            style={styles.input} 
            onChangeText={text => setValue(text)}
            value={value}
            placeholder="Заметка..."
            />
            <AntDesign.Button onPress={pressHandler} name='pluscircleo'>
                Добавить
            </AntDesign.Button>
            {/* <Button title='Добавить' onPress={pressHandler} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '60%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR
    }
})
