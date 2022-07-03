import React, { useState, useRef, useEffect } from 'react'

function Ref() {
    const [name, setName] = useState('')
    const renderCnt = useRef(1)
    const inputRef = useRef()

    useEffect(() => {
        renderCnt.current = renderCnt.current + 1
    })

    function focus() {
        inputRef.current.focus()

    }

    return (
        <div>
            <h1 className='font-bold text-5xl'>Ref</h1>

            <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
            <p>my name is {name}</p>
            <p>i rendered this {renderCnt.current} times</p>
            <button onClick={focus} className='btn'>focus</button>


        </div>
    )
}

export default Ref