import { NavLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Context/ContextProvider";
import Swal from "sweetalert2";

const Login = () => {
    const { login, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        login(email, password)
            .then(userCredentials => {
                if (userCredentials) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Welcome!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                    navigate("/")
                }
            })
            .catch(err=>{
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: `${err.code}`,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(userCredentials => {
                if (userCredentials) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Welcome!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/");
                }
            })
            .catch(err=>{
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: `${err.code}`,
                    showConfirmButton: false,
                    timer: 1500
                });
            })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-300">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-white p-8 shadow-xl">
                        <form onSubmit={handleLogin}>
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
                                <button onClick={handleGoogleLogin} className="btn rounded-full text-lg"><FcGoogle></FcGoogle></button>
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