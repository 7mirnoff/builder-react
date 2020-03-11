import React from 'react'
import TodoList from '../components/todo-list/todo-list'
import classes from './app.module.scss'

function App () {
  return (
    <div className={classes.wrapper}>
      <h1>React todo</h1>
      <TodoList />
    </div>
  )
}

export default App
