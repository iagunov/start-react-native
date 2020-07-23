import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Navbar } from './src/Navbar'
import { AddTodo } from './src/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([])

  const newTodo = {
    id: Date.now()
  }

  return (
    <View>
      <Navbar title='My Buy' />
      <View style={styles.container}>
        <AddTodo />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
