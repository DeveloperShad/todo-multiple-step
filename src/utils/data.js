import uuid from "react-uuid"

export const initTodo = {
    title: '',
    step: 1,
    id: '',
    serialNo: ''
    
}

export const sampleTodos = [
    {title: 'Learn Html', step:1, id: uuid(), serialNo: 1, },
    {title: 'Learn Css', step:2, id: uuid(), serialNo: 2, },
    {title: 'Learn Javascript', step:3, id: uuid(), serialNo: 3, },
    {title: 'Learn React', step:4, id: uuid(), serialNo: 4, }
]

