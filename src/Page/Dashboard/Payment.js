import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1W1gLCApDo5zACxxtjfaOnvqviXQsSkMXA7qOnnT5M8ydvBgjnbyGkXHYi2S37XRwLk9JGJg1PRjP1tM6Pi4ZC00c3I4fsf4');
const Payment = () => {
    const { id } = useParams()

    const url = `https://mysterious-reef-14055.herokuapp.com/purchase/${id}`
    const { data: item, isLoading } = useQuery(['item', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    // console.log(item);
    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <h2 className='card-title text-success font-bold'>Hello,  </h2>
                    <h2>Please pay for {item.toolsName}</h2>
                    <h2>Please pay for {item.totalPrice}</h2>

                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-xl bg-base-100 ">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm item={item} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;