import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const UpdateProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        // const user = user.displayName;
        // const email = user.email
        // const education = event.target.education.value;
        // const location = event.target.location.value;
        // const profile = event.target.profile.value;
        // const phone = event.target.phone.value
        // const data = { user, email, education, location, phone, profile }
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
                toast.success('Profile Updated successfully!!')
                navigate('/dashboard/myProfile')
            })
    }
    return (
        <div className='flex items-center mx-10'>
            <div className='mb-20'>
                <h2 className='text-center text-gray-900 text-3xl font-bold mb-8 font-sans'>Update<span className='text-primary'> Profile </span> !!</h2>
                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 justify-items-center mt-2'>
                    <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-60 max-w-xs" required />
                    <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-60 max-w-xs" required />
                    <input type="text" name='education' placeholder='Education' className="input input-bordered w-60 max-w-xs" required />
                    <input type="text" name='location' placeholder='Present Address' className="input input-bordered w-60 max-w-xs" required />
                    <input type="text" name='profile' placeholder='Profile Link' className="input input-bordered  max-w-xs w-60 mx-10" required />
                    <input type="number" name='phone' placeholder='Phone Number' className="input input-bordered  max-w-xs w-60 sm-w-60" required />

                    <input type="submit" value='Submit' className="btn btn-primary w-60 max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;