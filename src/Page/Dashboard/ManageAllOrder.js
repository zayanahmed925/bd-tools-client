import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import ManageOrderRow from './ManageOrderRow';

const ManageAllOrder = () => {
    const { data: allPurchase, isLoading, refetch } = useQuery('allPurchase', () => fetch('https://bd-tools-server.onrender.com/allPurchase', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>Manage all order {allPurchase.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>

                                <th>Tools Name</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Payment</th>
                                <th>Status</th>

                                <th>Delete</th>


                            </tr>
                        </thead>
                        <tbody>
                            {
                                allPurchase.map((purchase, index) => <ManageOrderRow
                                    purchase={purchase}
                                    index={index}

                                    refetch={refetch}
                                ></ManageOrderRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrder;