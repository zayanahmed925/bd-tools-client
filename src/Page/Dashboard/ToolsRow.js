import React from 'react';
import { toast } from 'react-toastify';

const ToolsRow = ({ tool, index, refetch, setDeleteTools }) => {
    const { name, price, img, _id } = tool;

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-16 mask mask-squircle">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                <label onClick={() => setDeleteTools(tool)} for="delete-modal" class="btn btn-circle btn-error btn-outline"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" /></svg></label>

                {/* <button onClick={() => handleDelete(_id)} class="btn btn-circle btn-error btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" /></svg>
                </button> */}
            </td>
        </tr>
    );
};

export default ToolsRow;