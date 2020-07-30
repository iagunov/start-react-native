import React from 'react'
import { StyleSheet, View, FlatList, Image, Text } from 'react-native'

import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {

    let content = (
        <FlatList 
         keyExtractor={item => item.id.toString()}
         data={todos}
         renderItem={({item}) => (
         <Todo
            todo={item}
            onRemove={removeTodo} 
            onOpen={openTodo}/>
            )}
        />
    )

    if (todos.length === 0) {
        content = <Text>No todos</Text>
        // <View style={styles.imgWrap}>
        //     <Image sourse={require('../../assets/no-items.png')} />
        // </View>
    }

    return (
        <View>
            <AddTodo onSubmit={addTodo}/>
                {content}
        </View>
    )
}

const styles = StyleSheet.create({
    imgWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300
    }
})
