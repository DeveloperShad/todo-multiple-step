
import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todo, handleDelete, handlePrevNextStep, step }) => {
    const sortedTodo = todo.filter(item=> item.step === step ).sort((a,b)=> a.serialNo - b.serialNo)
  return (
      <div className="todo-cont">
          <p>Step { step }</p>
          <div className="todo-list">
              {
                  sortedTodo.map((item) => (
                      <TodoListItem key={item.id} item={ item } handleDelete ={handleDelete} handlePrevNextStep = {handlePrevNextStep} />
                  ))
              }
          </div>
      </div>
  )
}
