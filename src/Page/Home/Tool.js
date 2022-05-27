import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, name, price, img, quantity, description, minimumQuantity } = tool;
    return (
        <div className="card  bg-base-100 shadow-xl border-2 border-orange-500">
            <figure className="px-4 pt-4">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body  ">
                <h2 className="card-title">{name}</h2>
                <p class="card-title">
                    Price: {price}
                    <div class="badge badge-secondary">Per Pics</div>
                </p>
                <p>Available Quantity: {quantity} Pcs</p>
                <p>Minimum Order: {minimumQuantity} Pcs</p>
                <p><small>{description}</small></p>

            </div>
            <Link to={`/tools/${_id}`}>
                <button className=' btn btn-primary w-full max-w-xl flex items-center'>Purchase</button></Link>
        </div>
    );
};

export default Tool;