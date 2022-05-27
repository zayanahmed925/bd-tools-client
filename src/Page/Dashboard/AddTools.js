import React from 'react';

const AddTools = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const minimumQuantity = event.target.minimumQuantity.value;
        const img = event.target.img.value;
        const description = event.target.description.value;
        const data = { name, price, quantity, minimumQuantity, img, description };
        const url = `http://localhost:5000/tools`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                event.target.reset();
            })

    }
    return (
        <div >
            <h2 className='text-center text-gray-900 text-3xl font-bold mb-8 font-sans'>Add Available<span className='text-primary'> Tools </span> !!</h2>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 justify-items-center mt-2'>
                <input type="text" name='name' placeholder='Tools Name' className="input input-bordered w-full max-w-xs" required />
                <input type="number" name="price" placeholder="Price" className="input input-bordered w-full max-w-xs" required />
                <input type="number" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full max-w-xs" required />
                <input type="number" name="minimumQuantity" placeholder="Minimum Quantity" className="input input-bordered w-full max-w-xs" required />
                <input type="text" name="img" placeholder="Enter Image URL" className="input input-bordered w-full max-w-xs" required />
                <textarea class="textarea textarea-bordered w-80" name='description' placeholder="Description" required></textarea>
                <input type="submit" value='submit' className="btn btn-primary w-full max-w-xs" />
            </form>
        </div>
    );
};

export default AddTools;