import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }

  return (
    <div style={{ marginTop: '1rem' }}>
      {todos.flatMap((todo, i) =>
        i === 0
          ? [
              <Todo
                key={todo._id}
                todo={todo}
                onDelete={onClickDelete(todo)}
                onComplete={onClickComplete(todo)}
              />
            ]
          : [
              <hr key={`sep-${todo._id}`} />,
              <Todo
                key={todo._id}
                todo={todo}
                onDelete={onClickDelete(todo)}
                onComplete={onClickComplete(todo)}
              />
            ]
      )}
    </div>
  )
}

export default TodoList
