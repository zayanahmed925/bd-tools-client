import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-slider" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h2 className='text-2xl'>Welcome to my Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="dashboard-slider" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Order</Link></li>
                    <li><Link to='/dashboard/addReview'>My Reviews</Link></li>
                    <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
                    {admin && <>
                        <li><Link to='/dashboard/allUsers'>All user</Link></li>
                        <li><Link to='/dashboard/addTools'>Add Tools</Link></li>
                        <li><Link to='/dashboard/manageTools'>Manage Tools</Link></li>
                    </>}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;