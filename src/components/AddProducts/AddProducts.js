import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
const AddProducts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        axios.post('http://localhost:5000/products', data)
            .then(res => {
                const result = res.data;
                if (result?.insertedId) {
                    alert("Product Added Successfully");
                    e.target.reset();
                }
            })
    };
    return (
        <div className="text-center mt-5">
            <h2>Add Products</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="w-25" type="text" {...register("Name", { required: true })} placeholder="Name" required />
                {/* Show Error */}
                <p className="text-danger">{errors.Name?.type === 'required' && "You cant submit without Product Name"}</p>

                <input className="w-25" type="text" {...register("Price", { required: true })} placeholder="Price" /> <br />

                {/* Show Error */}
                <p className="text-danger">
                    {errors.Price?.type === 'required' && "You cant submit without Product Price"}
                </p>


                <input className="w-25" type="text" {...register("Quantity", { required: true })} placeholder="Quantity" />
                {/* Show Error */}
                <p className="text-danger">
                    {errors.Price?.type === 'required' && "You cant submit without Product Quantity"}
                </p>
                <input className="btn btn-primary w-25" type="submit" />
            </form>
        </div >
    );
};

export default AddProducts;