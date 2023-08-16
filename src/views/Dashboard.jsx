import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

//test api when loading (useEffect)
//api (axios)
// state for info received from backend

const Dashboard = () => {

    const [productList, setProductList] = useState([])


    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
        .then(res => {
            setProductList(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/products/${deleteId}`)
        .then(res => {
            handleFilter(deleteId)
        })
        .catch(err => console.log(err))
    }

    const handleFilter = (deleteId) => {
        const filteredList = productList.filter((eachProduct) => deleteId !== eachProduct._id)
        setProductList(filteredList)
    }

    return (
        <div>
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {
            productList.map((eachProduct, idx) => {
                return(
                    <tr key={idx}>
                        <td>{eachProduct.title}</td>
                        <td>{eachProduct.price}</td>
                        <td><Link to={`/products/${eachProduct._id}`}>View</Link> |
                        <Link to={`/products/${eachProduct._id}/edit`}>Edit</Link> |
                        <button type='button' onClick={(e) => handleDelete(eachProduct._id)}>Delete</button>
                        
                        </td>
                    </tr>
                )
            })
        }
    </tbody>
</table>
        </div>
    )
}

export default Dashboard