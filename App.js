import React, {useState} from 'react';
import { StyleSheet, View, FlatList} from 'react-native';

import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';



export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([
    { id: '1', title: 'React'},
    { id: '2', title: 'React Native'}
  ])

  const addTodo = (title) => {
    setTodos(prev => [
      ...prev, 
      {
      id: Date.now().toString(),
      title: title
      }
    ])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  let content = (
    <MainScreen 
    todos={ todos } 
    addTodo={ addTodo } 
    removeTodo={removeTodo}
    openTodo={(id) => {
      setTodoId(id)
    }}
    />
  )
  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content = <TodoScreen goBack={() => setTodoId(null)} todo={selectedTodo}/>
  }

  return (
    <View>
      <Navbar title='My Buy' />
      <View style={styles.container}>
        { content }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
