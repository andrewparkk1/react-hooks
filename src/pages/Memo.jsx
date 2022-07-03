import React from 'react'
import { useEffect, useState, useMemo } from 'react'

function Memo() {
    const [num, setNum] = useState(0)
    const [dark, setDark] = useState('dark')
    const doubleNumber = useMemo(() => {
        return double(num)

    }, [num])

    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    })

    // const themeStyles = {
    //     backgroundColor: dark ? 'black' : 'white',
    //     color: dark ? 'white' : 'black'
    // }
    // useEffect(() => {
    //     console.log('theme changed')

    // }, [dark])

    return (
        <div>
            <h1 className='font-bold text-5xl'>Memo</h1>

            <input type="number" value={num} onChange={e => setNum(parseInt(e.target.value))} />
            <br />
            <button className="btn" onClick={e => setDark(prevDark => !prevDark)}>change dark</button>
            <div style={themeStyles}>{doubleNumber}</div>

        </div>
    )
}

function double(num) {
    for (let i = 0; i <= 1000000000; i++) { }
    return num * 2
}


export default Memo