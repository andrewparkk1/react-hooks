import { useEffect, useState } from 'react'

function ComplexTabsEffect() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)


    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    //on mount, add event listener to dynamically change windowWidth
    //when page changes, clean up function to remove event listener
    useEffect(() => {
        window.addEventListener('resize', handleResize)

/* A clean up function. It is called when the component is unmounted. */
        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])

    return (
        <div>
            <h1 className='font-bold text-3xl pt-10'>ComplexTabsEffect </h1>
            <p>window width is: {windowWidth}</p>



        </div>
    )
}

export default ComplexTabsEffect