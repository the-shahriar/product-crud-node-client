import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Products = (props) => {
    const { product, handleDelete } = props;
    const { _id, Name, Price, Quantity } = product;
    return (
        <div className="product">
            <h2>{Name}</h2>
            <h5>Price: {Price}</h5>
            <p>Quantity: {Quantity}</p>
            <Link className="me-4" to={`/manage/${_id}`}><button className="btn btn-warning">Update Product</button></Link>
            <button onClick={() => handleDelete(_id)} className="btn btn-warning">Delete Product</button>
        </div>
    );
};

export default Products;