import { Children } from "react";
import { Navigate } from 'react-router-dom'
function ProtectedRoutes({children}){
    const loginInfo = localStorage.getItem('userLogedIn')
    console.log('user login info', loginInfo )

    if(!loginInfo){
        return <Navigate to='/login' />
    }

    return children
}

export default ProtectedRoutes;