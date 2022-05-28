import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManagepurchaseRow = ({ purchase, index, refetch }) => {
    const { paid, _id, status } = purchase;
    const handleStatus = id => {
        const url = `https://mysterious-reef-14055.herokuapp.com/allPurchase/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Successfully Delivered');
                }
            })
    }
    const handleDelete = (id) => {
        const url = `https://mysterious-reef-14055.herokuapp.com/allPurchase/${id}`;
        fetch(url, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('Successfully Deleted')
                    refetch()
                }
            })

    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{purchase.toolsName}</td>
            <td>{purchase.quantity}</td>
            <td>{purchase.totalPrice}</td>
            <td>
                {
                    paid ? <p>Paid</p> : <p>Not paid</p>
                }
            </td>
            <td>
                {
                    status === 'pending' || !paid
                        ?
                        <button onClick={() => handleStatus(_id)} className='capitalize text-error hover:shadow-sm'>{status}</button>
                        :
                        <p className='text-success'>Delivered</p>
                }
            </td>
            <td>
                {
                    !paid && <button onClick={() => handleDelete(_id)} className='btn-xs text-error'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg></button>
                }

            </td>



        </tr>
    );
};

export default ManagepurchaseRow;