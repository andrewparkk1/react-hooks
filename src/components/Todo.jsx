import React from 'react'
import { ACTIONS } from './TodoReducer'

function Todo({ todo, dispatch }) {
    return (
        <div className='flex flex-row gap-5 py-3'>
            <span style={{ color: todo.complete ? '#AAA' : '#000' }}>{todo.name}</span>
            <button onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})} className='btn'>toggle</button>
            <button onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})} className='btn'>delete</button>
        </div>
    )
}

export default Todo