import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";


const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-300">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-white p-8 shadow-xl">
                        <form className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="Enter your E-mail" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="Enter your password" className="input input-bordered" required />
                                <label className="label">
                                    <p>New User? <NavLink to='/register' className='font-bold text-blue-600'>Register Now!</NavLink></p>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn bg-blue-600 text-white hover:bg-blue-700 duration-300">Login</button>
                            </div>
                        </form>
                        <div>
                            <div className="divider">Or</div>
                            <div className="flex justify-center items-center gap-5">
                                <button className="btn rounded-full text-lg"><FcGoogle></FcGoogle></button>
                                <button className="btn rounded-full text-blue-600 text-lg"><FaFacebook></FaFacebook></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;