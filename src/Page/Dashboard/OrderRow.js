import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, setDeleteOrder }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-16 mask mask-squircle">
                    <img src={order.img} alt='' />
                </div>
            </div></td>
            <td>{order.toolsName}</td>
            <td>{order.quantity}</td>
            <td>{order.totalPrice}</td>
            <td>
                {(order.totalPrice && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                {(order.totalPrice && order.paid) && <span className='text-success'>Paid</span>}
            </td>
            <td>
                {
                    order.transactionId ? <h2 className='text-success font-bold'>Success</h2> : <label onClick={() => setDeleteOrder(order)} for="order-modal" class="btn btn-circle btn-error btn-outline"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" /></svg></label>
                }
            </td>
            <td>
                {
                    order.transactionId && <h2 className='text-info'>{order.transactionId}</h2>
                }
            </td>
        </tr>
    );
};

export default OrderRow;