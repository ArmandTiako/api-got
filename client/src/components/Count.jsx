import React, {useState, useEffect} from 'react'


const Count = () => {


    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Vous avez cliqué ${count} fois`
    })

    const handleClick = () => {
        setCount(count + 1) 
    }

    return (
        <div>
            <p>Vous avez cliqué {count} fois</p>
            <button onClick={()=>handleClick()}>Cliquez ici !</button>
        </div>
    )
}

export default Count

