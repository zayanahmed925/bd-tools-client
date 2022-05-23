import React from 'react';

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' ? <button class="btn btn-sm btn-primary">Make Admin</button> : <h4 className='font-bold'>Already Admin</h4>}</td>
            <td><button class="btn btn-circle btn-error btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" /></svg>
            </button></td>
        </tr>
    );
};

export default UserRow;