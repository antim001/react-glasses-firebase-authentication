import { Link } from 'react-router-dom';
import {useContext} from 'react';
import SocialLogin from './SocialLogin';
import { AuthContext } from './../../Provider/AuthProvider';
import { toast } from 'react-hot-toast';

const Register = () => {
    const {createUser}=useContext(AuthContext);
    const handleSubmit=(e)=>{
               e.preventDefault()
               const form=e.target;
               const name=form.name.value;
               const email=form.email.value;
               const img=form.img.value;
               const password=form.password.value;
             createUser(email,password) 
             .then(res=>console.log(res))
             .catch(error=>console.log(error)) 
             if(password.length<6){
                toast.error("passwords must be at least 6character")
             }

    }
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Full name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" name='img' placeholder="image url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button className="btn btn-neutral"><input type="submit" value="Register" /></button>
                            </div>
                            <label className="label">
                                Have an account? <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
                            </label>
                            <SocialLogin />
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;