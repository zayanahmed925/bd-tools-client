import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, name, price, img, quantity, description, minimumQuantity } = tool;
    return (
        <div className="card w-96 bg-base-100 shadow-xl border-2 border-orange-500">
            <figure className="px-4 pt-4">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body  ">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price}</p>
                <p>Available Quantity: {quantity} Pcs</p>
                <p>Minimum Order: {minimumQuantity} Pcs</p>
                <p>{description}</p>
                <div className="card-actions">
                    <Link to={`/tools/${_id}`}>
                        <button className=' btn w-full max-w-xs'>Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Tool;