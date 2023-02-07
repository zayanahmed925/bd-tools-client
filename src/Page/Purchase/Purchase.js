import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useItems from '../Hooks/useItems';

const Purchase = () => {
    const { itemsId } = useParams()
    const [user, loading, error] = useAuthState(auth);
    const [items, setItems] = useItems(itemsId);
    // console.log(itemsId)
    const { _id, minimumQuantity, quantity, name, img, price } = items;
    const [disable, setDisable] = useState(false)

    const handleQuantity = (event) => {
        const inputQuantity = event.target.value;
        if (inputQuantity < minimumQuantity) {
            toast.error('You have to purchase at least 20 products')
            setDisable(true)
        }
        else if (inputQuantity > quantity) {
            toast.error('You have to purchase with in 1000 products')
            setDisable(true)
        }
        else {
            setDisable(false)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const purchase = {
            purchaseId: _id,
            userName: user.displayName,
            userEmail: user.email,
            img,
            toolsName: name,
            totalPrice: price * event.target.quantity.value,
            quantity: event.target.quantity.value,
            phone: event.target.phone.value,
            address: event.target.address.value
        }
        fetch('https://bd-tools-server.onrender.com/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {

                if (data.success) {
                    toast.success(`Your order Success for ${name}`)

                }
            })
    }
    return (
        <div className='flex justify-center items-center'>

            <br />

            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div>
                    <div className="card w-96 bg-white ">
                        <figure>
                            <img className='w-36' src={img} alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <p className="card-title">
                                Price: {price}
                                <div className="badge badge-secondary">Per Pics</div>
                            </p>
                            <p>Available Quantity: {quantity} Pcs</p>
                            <p>Minimum Order: {minimumQuantity} Pcs</p>
                            <p>{items.description}</p>

                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">Purchase Your <span className='text-primary'>Product</span>!</h2>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 justify-items-center mt-2'>
                        <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input onChange={handleQuantity} type="number" name="quantity" placeholder="Quantity" className="input input-bordered w-full max-w-xs" required />
                        <input type="text" name='phone' placeholder="Phone No:" className="input input-bordered w-full max-w-xs" required />
                        <input type="text" as='text-area' name='address' placeholder='Address' className="input input-bordered w-full max-w-xs" required />
                        <input type="submit" value='submit' disabled={disable} className="btn btn-primary w-full max-w-xs" />
                    </form>
                </div>
            </div>


        </div>
    );
};

export default Purchase;