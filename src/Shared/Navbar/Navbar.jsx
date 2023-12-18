import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useContext } from "react";
import { AuthContext } from "../../Context/ContextProvider";
import Swal from "sweetalert2";


const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    // console.log(user);
    const handleLogout = () => {
        logout()
            .then(userCredentials => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Logout Succeeded",
                    showConfirmButton: false,
                    timer: 1500
                });

            })
    }
    const links =
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/blogs'>All Blogs</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            <input type="text" placeholder="Search" className="border p-2 rounded-md bg-base-200" />


        </>
    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-white">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2"><Logo></Logo></div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                {links}
                            </ul>
                        </div>
                        {
                            user ?
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            {
                                                user.photoURL ?
                                                    <img alt={user?.displayName} src={user.photoURL} />
                                                    :
                                                    <img alt={user?.displayName} src='https://i.ibb.co/Bcjq85V/user.png' />


                                            }
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-64">
                                        <li>
                                            {
                                                user?.displayName ?
                                                    <p className="text-lg font-bold">{user.displayName}</p>
                                                    :
                                                    <p className="text-lg font-bold">User</p>

                                            }
                                        </li>
                                        <li><a>Settings</a></li>
                                        <li><button onClick={handleLogout}>Logout</button></li>
                                    </ul>
                                </div>
                                :

                                <Link className="btn btn-sm" to='/login'>Login</Link>
                        }
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 z-1">
                        {
                            links
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;