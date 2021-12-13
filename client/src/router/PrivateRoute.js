import { useSelector } from 'react-redux'
import {Navigate} from 'react-router-dom'

function PrivateRoute({children}){
    const token=localStorage.getItem('token')
    // const isAuth=useSelector(state=>state.authReducer.isAuth)
return (
    <>
    {
        token ? children:<Navigate to='/login' />
    }
    </>
)
}
export default PrivateRoute