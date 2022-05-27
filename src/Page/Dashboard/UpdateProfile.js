import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const UpdateProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleSubmit = (event) => {
        event.preventDefault()
        const profile = {
            user: user.displayName,
            email: user.email,
            education: event.target.education.value,
            location: event.target.location.value,
            profile: event.target.profile.value,
            phone: event.target.phone.value
        }
        fetch(`http://localhost:5000/profile/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {

                if (data.success) {

                }
            })
    }
    return (
        <div className='flex items-center '>
            <div className='mb-20'>
                <h2 className='text-center my-4'>Update Profile</h2>
                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 justify-items-center mt-2'>
                    <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                    <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='education' placeholder='Education' className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='location' placeholder='Present Address' className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='profile' placeholder='Profile Link' className="input input-bordered  max-w-xs w-80" />
                    <input type="number" name='phone' placeholder='Phone Number' className="input input-bordered  max-w-xs w-80" />

                    <input type="submit" value='Submit' className="btn btn-primary w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;