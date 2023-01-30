import 'bootstrap/dist/css/bootstrap.min.css';
import Auth, {SignIn} from './auth/auth';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Main from "./components/main";
import PrivateRoutes from "./components/private-routes";

export const baseUrl = 'https://manager-yma2.onrender.com'
export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<PrivateRoutes />}>
                        <Route element={<Main/>} path="React-Manager/main" />
                    </Route>
                    <Route element={<SignIn/>} path="/React-Manager"/>
                    <Route path="/React-Manager/sign" element={<Auth />} />
                </Routes>
            </BrowserRouter>
        </div>

    );
}
