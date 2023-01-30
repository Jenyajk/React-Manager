import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    let token = localStorage.getItem("token")
    let t = !token

    return(
        !t ? <Outlet/>: <Navigate to="/"/>
    )
}

export default PrivateRoutes
