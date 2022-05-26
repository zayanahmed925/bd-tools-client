import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleSubmit = (event) => {
        event.preventDefault()
        const review = {
            user: user,
            comments: event.target.comments.value,
            reviewStar: event.target.review.value,
        }
        fetch('http://localhost:5000/review', {
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
        <div className='flex items-center md:p-30'>
            <div>
                <h2 className='text-center my-10'>Please Review our service</h2>
                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 justify-items-center mt-2'>
                    <textarea class="textarea textarea-bordered w-80" name='comments' placeholder="Comments"></textarea>
                    <input type="number" name="review" placeholder="Review out of 5" className="input input-bordered w-full max-w-xs" />

                    <input type="submit" value='Review' className="btn btn-primary w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;