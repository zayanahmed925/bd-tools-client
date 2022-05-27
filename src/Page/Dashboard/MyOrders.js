import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import OrderModal from './OrderModal';
import OrderRow from './OrderRow';
const MyOrders = () => {
    const [deleteOrder, setDeleteOrder] = useState(null);
    console.log(deleteOrder);
    const [user] = useAuthState(auth)
    const navigate = useNavigate();

    const { data: orders, isLoading, refetch } = useQuery('tools', () => fetch(`http://localhost:5000/purchase?userEmail=${user.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        console.log('res', res);
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');
        }
        return res.json()

    }))
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            {
                orders.length < 1 ? <h2 className='text-2xl font-bold text-orange-600 '>You have no Order !!</h2> : <>

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
                                    <th>transactionId </th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map((order, index) => <OrderRow
                                        order={order}
                                        index={index}
                                        setDeleteOrder={setDeleteOrder}
                                        refetch={refetch}
                                    ></OrderRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                    {
                        deleteOrder && <OrderModal
                            deleteOrder={deleteOrder}
                            refetch={refetch}
                            setDeleteOrder={setDeleteOrder}
                        ></OrderModal>
                    }
                </>
            }

        </div>
    );
};

export default MyOrders;