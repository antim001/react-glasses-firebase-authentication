import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './../../Provider/AuthProvider';
import { toast } from 'react-hot-toast';
import SocialLogin from './SocialLogin';

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const handleLogin = async (e) => { // Added async here to use await inside
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        try {
            const res = await signIn(email, password); // Using await to get the response
            console.log(res);
            // Check if the response indicates an invalid user
            if (res && res.invalidUser) {
                toast.error("Invalid user. Please register first.");
            }
            else{
                toast.success("Login succesful");
            }
        } catch (error) {
            console.log(error);
            toast.error("Invalid user"); // Toast for generic error
        }
    }

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6 p-0">
                                    <button type='submit' className="btn btn-neutral">Login</button>
                                </div>
                                <label className="label">
                                    New here? <Link to="/register" className="label-text-alt link link-hover">Create an account</Link>
                                </label>
                              <SocialLogin></SocialLogin>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
