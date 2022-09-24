
import React from 'react'
import { useState } from 'react'
import { Button } from './Button'
import { Input } from './Input'
import { useRef } from 'react'
import { initTodo, sampleTodos } from '../utils/data'
import { TodoList } from './TodoList'
import { getSerialNo, swapItem } from '../utils/todoHandler'
import uuid from 'react-uuid'

export const Home = () => {
    const dialogRef = useRef()
    const [todoInput, setTodoInput] = useState(initTodo)
    const [todo, setTodo] = useState(sampleTodos)
    const [filteredTodo, setFilteredTodo] = useState(todo)
    const [searchKeyword, setSearchKeyword] = useState({title: ''})

    const openPopUp = () => {
        dialogRef.current.showModal()
    }
    const closePopUp = () => {
        dialogRef.current.close()
    }
    const handleChangeAddTodo = (e) => {
        setTodoInput({ ...todoInput, title: e.target.value, })
    }
    const handleSearchTodo = (e) => {
        setSearchKeyword({...searchKeyword, title: e.target.value})
        console.log(e.target.value)
        const searchedTodo = todo.filter(item => item.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        setFilteredTodo(searchedTodo)
    }
    const handleAddTodo = () => {
        const obj = { ...todoInput, id: uuid(), serialNo: getSerialNo(todo) }
        setTodoInput(obj)
        setTodo([...todo, obj])
        setFilteredTodo([...todo, obj])
        setTodoInput(initTodo)
        closePopUp()
    }

    const handleDelete = (id) => {
        const updatedTodo = todo.filter((item) => item.id !== id)
        setTodo(updatedTodo)
        setFilteredTodo(updatedTodo)
    }

    const handlePrevNextStep = (id, swapValue) => {
        const swapedTodo = swapItem(todo, id, swapValue)
        setTodo(swapedTodo)
        setFilteredTodo(swapedTodo)
    }



    return (
        <div className='home'>
            <div className='todo'>
                <Input placeholder={'Search'} searchIcon={true} handleChange={handleSearchTodo} value={ searchKeyword }/>
                <Button btnText={'Add Task'} btnIcon={true} handleButton={openPopUp} />
                <dialog ref={dialogRef}>
                    <div className="popup">
                        <span onClick={closePopUp}><i className="fas fa-times"></i></span>
                        <h2>Add Task</h2>
                        <Input placeholder={'Add Title'} handleChange={handleChangeAddTodo} value={todoInput} />
                        <Button btnText={'Add Task'} handleButton={handleAddTodo} />
                    </div>
                </dialog>
            </div>
            <div className="todo-wrapper">
                {
                    [1, 2, 3, 4].map(step => (
                        <TodoList todo={filteredTodo} handleDelete={handleDelete} handlePrevNextStep={handlePrevNextStep} step={step} key={ step }/>
                    ))
                }
            </div>
        </div>
    )
}
