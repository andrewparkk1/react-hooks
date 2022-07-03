import CounterReducer from '../components/CounterReducer'
import TodoReducer from '../components/TodoReducer'


function Reduce() {


    return (
        <div>
            <h1 className='font-bold text-5xl pb-10'>Reduce</h1>
            <CounterReducer></CounterReducer>
            <TodoReducer></TodoReducer>
        </div>
    )
}

export default Reduce