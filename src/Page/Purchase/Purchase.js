import React from 'react';
import { useParams } from 'react-router-dom';
import useItems from '../Hooks/useItems';

const Purchase = () => {
    const { itemsId } = useParams()
    const [items, setItems] = useItems(itemsId);
    // console.log(itemsId)
    return (
        <div>
            <p>{items.name}</p>
        </div>
    );
};

export default Purchase;