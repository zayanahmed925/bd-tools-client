import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/purchase?userEmail=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])
    return (
        <div>
            <h2>Order {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Tools Name</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Pay</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td><div class="avatar">
                                    <div class="w-16 mask mask-squircle">
                                        <img src={order.img} alt='' />
                                    </div>
                                </div></td>
                                <td>{order.toolsName}</td>
                                <td>{order.quantity}</td>
                                <td>{order.totalPrice}</td>
                                <td><button class="btn btn-sm">Tiny</button></td>
                                <td><button class="btn btn-circle btn-error btn-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button></td>
                            </tr>)
                        }




                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;