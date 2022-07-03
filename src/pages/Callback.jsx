import React, { useCallback, useEffect, useState } from 'react'


function Callback() {
    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    }

    const getItems = useCallback((incrementor) => {
        return [number + incrementor, number + 1 + incrementor, number + 2 + incrementor]
    }, [number]) 

    // const getItems = useCallback(() => {
    //     return [number, number + 1, number + 2]
    // }, [number]) 


    return (
        <div style={theme}>
            <h1 className='font-bold text-5xl pb-10'>Callback</h1>
            <button className="btn" onClick={() => setDark(prevDark => !prevDark)}>toggle theme</button>
            <br />
            <br />
            <input className="input input-primary" type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <List getItems={getItems}></List>
        </div>
    )
}


function List({ getItems }) {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems(5))
        console.log('updated items')
    }, [getItems])

    return (
        <>
            {items.map(item => {
                return <p key={item}>{item}</p>
            })}
        </>
    )
}


export default Callback