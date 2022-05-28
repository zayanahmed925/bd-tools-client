import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import DeleteModal from './DeleteModal';
import ToolsRow from './ToolsRow';

const ManageTools = () => {
    const [deleteTools, setDeleteTools] = useState(null);
    const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch('https://mysterious-reef-14055.herokuapp.com/tools', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    console.log(tools)
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>Manage Tools{tools.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            tools.map((tool, index) => <ToolsRow
                                key={tool._id}
                                tool={tool}
                                index={index}
                                setDeleteTools={setDeleteTools}
                                refetch={refetch}
                            ></ToolsRow>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deleteTools && <DeleteModal
                    deleteTools={deleteTools}
                    refetch={refetch}
                    setDeleteTools={setDeleteTools}
                ></DeleteModal>
            }
        </div>
    );
};

export default ManageTools;