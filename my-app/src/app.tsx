import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './auth/auth';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Auth />}>


                </Route>
            </Routes>
        </BrowserRouter>
    );
}




//<Route path="sign" element={<SignIn />} />
