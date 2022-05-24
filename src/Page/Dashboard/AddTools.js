import React from 'react';

const AddTools = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const minimumQuantity = event.target.minimumQuantity.value;
        const img = event.target.img.value;
        const text = event.target.description.value;
        const data = { name, price, quantity, minimumQuantity, img, text };
        const url = `http://localhost:5000/tools`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 justify-items-center mt-2'>
                <input type="text" name='name' placeholder='Tools Name' className="input input-bordered w-full max-w-xs" />
                <input type="number" name="price" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                <input type="number" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full max-w-xs" />
                <input type="number" name="minimumQuantity" placeholder="Minimum Quantity" className="input input-bordered w-full max-w-xs" />
                <input type="text" name="img" placeholder="Enter Image URL" className="input input-bordered w-full max-w-xs" />
                <textarea class="textarea textarea-bordered w-80" name='description' placeholder="Description"></textarea>
                {/* <input type="text" name='description' placeholder='Description' className="input input-bordered w-full max-w-xs" /> */}
                <input type="submit" value='submit' className="btn btn-primary w-full max-w-xs" />
            </form>
        </div>
    );
};

export default AddTools;