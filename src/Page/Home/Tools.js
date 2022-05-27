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
        <div className='container mx-auto py-12'>

            <h2 className='text-center text-gray-900 text-3xl font-bold mb-12 font-sans'>Our Available <span className='text-primary'>Tools</span> !!</h2>
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