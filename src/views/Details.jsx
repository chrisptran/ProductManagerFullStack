import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate} from 'react-router-dom'

// get id from params : useParams()
// use id to get info from api : axios
// display info on load : useEffect
// variable change : useState

const Details = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const [product, setProduct] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            setProduct(res.data)
        })
        .catch(err => console.log(err))
    }, [id])

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then( res => {
            navigate(`/products`)
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <h3>Price: {product.price}</h3>
            <p>Description: {product.description}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Details