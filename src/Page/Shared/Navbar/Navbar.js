import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);
    console.log(user);
    const navigate = useNavigate();
    const logout = () => {
        signOut(auth);
        navigate('/home')
        localStorage.removeItem('accessToken')
    };
    const menuItems = <>
        <li><Link to='/home'>Home</Link></li>
        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }
        <li><Link to='/portfolio'>Portfolio</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>

        <li>{user ? <button className="btn btn-ghost" onClick={logout}>Sign Out</button> : <Link to='/login'>Login</Link>}</li>
        <li className='font-bold text-orange-400'>{user?.displayName}</li>

    </>
    return (
        <div>
            <div className="navbar  ">
                <div className="navbar-start ">


                    <div className="dropdown">

                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 flex items-center">
                            {
                                menuItems
                            }
                        </ul>
                    </div>
                    <h2 className="font-bold lg:pl-8 normal-case text-xl font-sans">BD TOOLS</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 flex items-center">
                        {
                            menuItems
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex="1" for="dashboard-slider" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                </div>

            </div>

        </div>
    );
};

export default Navbar;