import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto flex flex-col gap-4 my-8 px-4'>
            <div className='bg-orange-100 p-4 rounded-md'>
                <h2 className='font-bold text-xl'>Q1:How will you improve the performance of a React Application?</h2>
                <ul className='list-inside list-disc'>
                    <li className=''>Avoid inline functions as much as possible. If your application is small, it will not affect you much but once you develop more and more features, this will bite you for sure.</li>
                    <li>Remember that Immutability is the key to avoid unnecessary re-renders.</li>
                    <li>Always render hidden components like Modals and Dropdowns conditionally. These components are not visible until triggered, but are affecting your application’s overall performance.</li>
                    <li>Always call multiple APIs parallelly. Sequential calls affect load time.</li>
                </ul>
            </div>
            <div className='bg-orange-100 p-4 rounded-md'>
                <h2 className='font-bold text-xl'>Q2:What are the different ways to manage a state in a React application?</h2>
                <ul className='list-inside list-disc'>
                    <li ><span className='font-bold'>Global state:</span> Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</li>
                    <li ><span className='font-bold'>Local state:</span> Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.</li>
                    <li ><span className='font-bold'>Server state:</span> Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.</li>
                    <li ><span className='font-bold'>URL state:</span> Data that exists on our URLs, including the pathname and query parameters.  URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL.</li>

                </ul>
            </div>
            <div className='bg-orange-100 p-4 rounded-md'>
                <h2 className='font-bold text-xl'>Q3:How does prototypical inheritance work?</h2>
                <p><span className='font-bold'>Ans: </span>prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a rototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
            </div>
            <div className='bg-orange-100 p-4 rounded-md'>
                <h2 className='font-bold text-xl'>Q4:You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p><span className='font-bold'>Ans: </span>The find() method returns the first value in an array that matches the conditions of a function.So i implement the find method.</p>
            </div>
            <div className='bg-orange-100 p-4 rounded-md'>
                <h2 className='font-bold text-xl'>Q5:What is a unit test? Why should write unit tests?</h2>
                <ul className='list-disc list-inside'>
                    <li><span className='font-bold'>Ans: </span>Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. </li>
                    <li>Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently. </li>
                </ul>
            </div>
        </div>
    );
};

export default Blogs;