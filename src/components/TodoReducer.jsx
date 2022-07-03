import { useReducer, useState } from 'react'
import Todo from './Todo';


export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
}


function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return {...todo, complete: !todo.complete}
                }
                return todo
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)
        default:
            return todos;
    }
}

function newTodo(name) {
    return {
        id: Date.now(),
        name: name,
        complete: false
    }
}

function TodoReducer() {
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({type: ACTIONS.ADD_TODO, payload: {name: name}})
        setName('')
    }

    console.log(todos)


    return (
        <div>
            <h1 className='font-bold text-3xl pt-16'>Todo Reduce</h1>


            <form onSubmit={handleSubmit} className="py-8">
                <input className="input input-bordered input-primary" type="text" value={name} onChange={e => setName(e.target.value)} />
                <button className="btn mx-6" type='submit'>submit</button>
            </form>

            {/* {JSON.stringify(todos)} */}

            {todos.map(todo => {
                return <Todo key={todo.id} todo={todo} dispatch={dispatch}></Todo>
            })}


        </div>
    )
}

export default TodoReducer