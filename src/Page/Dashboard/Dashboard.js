import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile ">
            <input id="dashboard-slider" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">

                <Outlet></Outlet>


            </div>
            <div className="drawer-side ">
                <label for="dashboard-slider" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-white lg:bg-transparent text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {
                        !admin && <>
                            <li><Link to='/dashboard'>My Order</Link></li>
                            <li><Link to='/dashboard/addReview'>Add Reviews</Link></li>
                        </>
                    }
                    <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
                    {admin && <>
                        <li><Link to='/dashboard/allUsers'>All user</Link></li>
                        <li><Link to='/dashboard/addTools'>Add Tools</Link></li>
                        <li><Link to='/dashboard/manageTools'>Manage Tools</Link></li>
                        <li><Link to='/dashboard/manageAllOrder'>Manage All Order</Link></li>
                    </>}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;