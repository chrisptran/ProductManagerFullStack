import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

// get details to pre-populate
//1. get id from params : useParams()
//2. use the id to get info from api : axios
//3. display the info on load: useEffect
// Creating the form
//4. form input : onChange, useState
//5. form submit: handleSubmit
//6. send form data into api : axios
//7. logic after update: redirect to details page

const EditPage = () => {
    //1. get id from params : useParams()
    const { id } = useParams()

    const navigate = useNavigate()

    //2. use the id to get info from api : axios
    //3. display the info on load: useEffect
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(1)
    const [description, setDescription] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                const oneProduct = res.data
                setTitle(oneProduct.title)
                setPrice(oneProduct.price)
                setDescription(oneProduct.description)
            })
            .catch(err => console.log(err))
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/${id}`, {title, price, description})
        .then(res => {
            navigate(`/products`)
        })
        .catch(err => console.log(err))
        
    }

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then( res => {
            navigate(`/products`)
        })
        .catch(err => console.log(err))
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type='text' name='title' value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Price:</label>
                    <input type='number' name='price' value={price}
                        onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label>Description:</label>
                    <input type='textarea' name='description' value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button type='submit'>Update Product</button>
                <button type='button' onClick={handleDelete}>Delete</button>
            </form>
        </div>
    )
}

export default EditPage