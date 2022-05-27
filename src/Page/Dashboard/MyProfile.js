import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const { data: profile, isLoading, } = useQuery('profile', () => fetch(`http://localhost:5000/profile/${user.email}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }

    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="max-w-sm content-center flex flex-col justify-center bg-white mt-[10vh] rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 py-8">

                {
                    profile?.map(p => <div class="flex flex-col   pl-10  pb-10">
                        <h1 class="text-3xl text-gray-900 font-semibold">{p.user}</h1>
                        <div class="mb-2 mt-2">
                            <h1 class="text-base text-gray-300 font-semibold">Education</h1>
                            <p class="text-base text-gray-800 font-semibold">{p.education}</p>
                        </div>
                        <div class="mb-2 mt-2">
                            <h1 class="text-base text-gray-300 font-semibold">Contact Details</h1>
                            <div class="mt-2 flex items-center">
                                <img class="w-5" src="https://www.linkpicture.com/q/image-13_16.png" />
                                <h1 class="text-base text-gray-900 ml-5 font-semibold">{p.phone}</h1>
                            </div>
                            <div class="mt-2 flex items-center">
                                <img class="w-5" src="https://www.linkpicture.com/q/image-14_4.png" />
                                <h1 class="text-base text-gray-900 ml-5 font-semibold">{p.email}</h1>
                            </div>
                            <div class="mt-2 flex items-center">
                                <img class="w-5" src="https://www.linkpicture.com/q/image-15_4.png" />
                                <h1 class="text-base text-gray-900 ml-4 font-semibold">{p.profile}</h1>
                            </div>
                            <div class="mt-2 flex items-center">
                                <img class="w-5" src="https://www.linkpicture.com/q/image-16_5.png" />
                                <h1 class="text-base text-gray-900 ml-5 font-semibold">{p.location}</h1>
                            </div>


                        </div>
                    </div>)
                }
                <Link to={`/dashboard/updateProfile`}><button className='btn  btn-primary w-3/4 mx-auto flex items-center'>{
                    profile.length < 1 ? 'Add your Information' : 'Update'
                }</button></Link>
            </div>
        </div>
    );
};

export default MyProfile;