import {useContext} from 'react';
import { AuthContext } from './../Provider/AuthProvider';
import {Navigate} from 'react-router-dom'
const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading) return <h1 className='text-5xl font-bold'>Loading</h1>
    if(!user?.email){
        return <Navigate to='/login'></Navigate>
    }
    return children
        

};

export default PrivateRoute;