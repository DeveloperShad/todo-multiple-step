
import React from 'react'

export const TodoListItem = ({item, handleDelete, handlePrevNextStep}) => {
  return (
      <div className="todo-item">
          <div className="serial-delete-cont">
              <span>{item.serialNo}</span>
              <button onClick={() => handleDelete(item.id)}><i className="fas fa-trash"></i> Delete</button>
          </div>
          <div>{item.title}</div>
          <div className="prev-next-btn-cont">
              <button disabled={item.step <= 1} onClick={() => handlePrevNextStep(item.id, -1)}><i className="fas fa-long-arrow-alt-left"></i></button>
              <button disabled={item.step >= 4} onClick={() => handlePrevNextStep(item.id, 1)}><i className="fas fa-long-arrow-alt-right"></i></button>
          </div>
      </div>
  )
}
