import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';

const ManageProducts = () => {
    const [product, setProduct] = useState({});
    const { Name, Price, Quantity } = product;
    const { id } = useParams();

    // reack hook from
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {
        const url = `http://localhost:5000/products/${id}`;
        axios.put(url, data)
            .then(res => {
                const result = res.data;
                if (result.modifiedCount > 0) {
                    alert("Product updated successfullu");
                    e.target.reset();
                }

            })
    }

    // get the specifiq id_ product
    const getProduct = () => {
        const url = `http://localhost:5000/products/${id}`
        axios.get(url)
            .then(res => {
                setProduct(res.data)
            })
    }

    useEffect(() => getProduct(), []);

    return (
        <div className="text-center mt-5">
            <h2>Manage Products</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="w-25" defaultValue={Name} type="text" {...register("Name", { required: true })} placeholder="Name" required />
                {/* Show Error */}
                <p className="text-danger">{errors.Name?.type === 'required' && "You cant submit without Product Name"}</p>

                <input defaultValue={Price} className="w-25" type="text" {...register("Price", { required: true })} placeholder="Price" /> <br />

                {/* Show Error */}
                <p className="text-danger">
                    {errors.Price?.type === 'required' && "You cant submit without Product Price"}
                </p>


                <input defaultValue={Quantity} className="w-25" type="text" {...register("Quantity", { required: true })} placeholder="Quantity" />
                {/* Show Error */}
                <p className="text-danger">
                    {errors.Price?.type === 'required' && "You cant submit without Product Quantity"}
                </p>
                <input className="btn btn-primary w-25" type="submit" value="Update" />
            </form>
        </div >
    );
};

export default ManageProducts;