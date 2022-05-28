import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const [disable, setDisable] = useState(false)
    const handleReview = event => {
        const reviewInput = event.target.value;
        if (reviewInput < 1 || reviewInput > 5) {
            setDisable(true)
        }
        else {
            setDisable(false)
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const review = {
            user: user,
            comments: event.target.comments.value,
            reviewStar: event.target.review.value,
        }
        fetch('https://mysterious-reef-14055.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {

                if (data.success) {

                }
            })
    }
    return (
        <div className='flex items-center md:p-30 container mx-auto my-7'>
            <div>
                <h2 className='text-center text-gray-900 text-3xl font-bold mb-8 font-sans'>Please Review Our<span className='text-primary'> Service </span> !!</h2>
                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 justify-items-center mt-2'>
                    <textarea className="textarea textarea-bordered w-80" name='comments' placeholder="Comments" required></textarea>
                    <input type="number" onChange={handleReview} name="review" placeholder="Review out of 5" className="input input-bordered w-full max-w-xs" />

                    <input type="submit" disabled={disable} value='Review' className="btn btn-primary w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;