import React, {useState, useEffect} from 'react'
import axios from 'axios'

//test api when loading (useEffect)
//api (axios)
// state for info received from backend

const TestPage = () => {

    const [message, setMessage] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:8000/api/test`)
        .then(res => setMessage(res.data))
        .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h1>Message from backend: {message.status}</h1>
        </div>
    )
}

export default TestPage