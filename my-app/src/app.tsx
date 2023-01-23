import 'bootstrap/dist/css/bootstrap.min.css';
import Auth, {SignIn} from './auth/auth';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main";


export default function App() {
    const isAuth = false
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Auth />} />
                <Route path="main" element={<Main />} />
                <Route path="sign" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    );
}

