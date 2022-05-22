import React from 'react';

const Tool = ({ tool }) => {
    const { name, price, img } = tool;
    return (
        <div class="card w-96 bg-base-100 shadow-xl border-2 border-orange-500">
            <figure class="px-4 pt-4">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;