import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([])
    console.log(tools)
    useEffect(() => {
        fetch('http://localhost:5000/tools', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className='container mx-auto'>
            <p>{tools.length}</p>
            <h2 className='text-3xl font-bold text-center'>Our Tools</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 '>
                {
                    tools?.slice(0, 6).map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;