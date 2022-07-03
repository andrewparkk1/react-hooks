import { useEffect, useState } from 'react'

function TabsEffect() {
    const [resourceType, setResourceType] = useState('users')
    const [items, setItems] = useState([])

    console.log('render')

    useEffect(() => {
        console.log('resource changed')
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType]) 

    useEffect(() => {
        console.log('on mount')
    }, [])

    return (
        <div>
            <h1 className='font-bold text-3xl pt-10'>TabsEffect</h1>

            <div className='flex flex-row gap-5'>
                <button className="btn" onClick={() => setResourceType('posts')}>Posts</button>
                <button className="btn" onClick={() => setResourceType('users')}>Users</button>
                <button className="btn" onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            <h1 className='text-3xl pt-5'>{resourceType}</h1>
            {items.map((item) => {
                return <pre>{JSON.stringify(item)}</pre>
            })}

        </div>
    )
}

export default TabsEffect