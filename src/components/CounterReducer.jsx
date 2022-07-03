import { useReducer } from 'react'


const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}


function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 }
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 }
        default:
            return state;
    }
}

function CounterReducer() {
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    function increment() {
        dispatch({ type: ACTIONS.INCREMENT })
    }

    function decrement() {
        dispatch({ type: ACTIONS.DECREMENT })
    }


    return (
        <div>
            <h1 className='font-bold text-3xl py-10'>Counter Reduce</h1>


            <button className="btn" onClick={decrement}>-</button>
            <span className='px-10'>{state.count}</span>
            <button className="btn" onClick={increment}>+</button>


        </div>
    )
}

export default CounterReducer