import 'bootstrap/dist/css/bootstrap.min.css';
import Auth, {SignIn} from './auth/auth';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Main from "./components/main";
import PrivateRoutes from "./components/private-routes";

export const baseUrl = 'http://localhost:5000'
export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<PrivateRoutes />}>
                        <Route element={<Main/>} path="main" />
                    </Route>
                    <Route element={<SignIn/>} path="/"/>
                    <Route path="sign" element={<Auth />} />
                </Routes>
            </BrowserRouter>
        </div>

    );
}
