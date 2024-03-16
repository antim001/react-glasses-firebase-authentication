import {useContext} from 'react'
import { AuthContext } from './../../Provider/AuthProvider';
const SocialLogin = () => {
    const {googleLogin}=useContext(AuthContext)
    const handleGoogle=(media)=>{
         media()
         .then(res=>console.log(res))
    }
    return (
        <>
            <div className="divider">continue with</div>
            <div className="">
                <button onClick={()=>handleGoogle(googleLogin)} className="btn btn-primary btn-block btn-outline">Google</button>
            </div>
        </>
    );
};

export default SocialLogin;