import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log(res)
                if (res.status === 403) {
                    toast.error('Failed to make admin')
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Successfully make admin')
                    refetch()
                }

            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' ? <button onClick={makeAdmin} class="btn btn-sm btn-primary">Make Admin</button> : <h4 className='font-bold text-green-500'>Already Admin</h4>}</td>
            <td><button class="btn btn-circle btn-error btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" /></svg>
            </button></td>
        </tr>
    );
};

export default UserRow;