import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ deleteTools, refetch, setDeleteTools }) => {
    const { name, _id } = deleteTools;

    const handleDelete = id => {
        // console.log('delete')
        fetch(`http://localhost:5000/tools/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success(`Tools: ${name} successfully delete`)
                setDeleteTools(null)
                refetch();
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">You want to delete {name}!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">

                        <button onClick={() => handleDelete(_id)} class="btn btn-sm btn-error">Delete</button>
                        <label for="delete-modal" class="btn btn-sm btn-success">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;