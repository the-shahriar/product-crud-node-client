import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Products from '../Products/Products';
import './Home.css';
import { useParams } from 'react-router';

const Home = () => {
    const [products, setProducts] = useState([]);

    // get data using axios
    const getProducts = () => {
        axios.get('http://localhost:5000/products')
            .then(res => {
                setProducts(res.data)
            })
    }
    useEffect(() => getProducts(), []);

    // Delete a product
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure?")
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`
            axios.delete(url)
                .then(res => {
                    const result = res.data;
                    if (result.deletedCount > 0) {
                        alert("Product deleted successfully");
                        const remainingProducts = products.filter(product => product._id !== id)
                        setProducts(remainingProducts);
                    }
                })
        }

    }
    return (
        <div className="text-center mt-4">
            <h2>All Products</h2>
            <div className="products">
                {
                    products.map(product => <Products
                        key={product._id}
                        product={product}
                        handleDelete={handleDelete}
                    ></Products>)
                }
            </div>
        </div>
    );
};

export default Home;