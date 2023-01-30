import "bootstrap/dist/css/bootstrap.min.css";
import "./auth.css";
import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import {baseUrl} from "../app";



export default function Auth() {
    const [value, setValue] = useState({username: ''});
    const [password, setPassword] = useState({password: ''});
    const [email, setEmail] = useState({email: ''});
    return (
        <form className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal">Registration</h1>
            <div> If you have account
                <Link to="/" className="link"> Sign In</Link>
            </div>
            <label htmlFor="inputEmail" className="sr-only">
            </label>
            <input
                type="string"
                id="email"
                className="form-control"
                placeholder="email"
                required
                autoFocus
                autoComplete=""
                onChange={(e) => setEmail({ email: e.target.value })}
            />
            <label htmlFor="inputEmail" className="sr-only">
            </label>
            <input
                type="string"
                id="login"
                className="form-control"
                placeholder="Login"
                required
                autoFocus
                autoComplete=""
                onChange={(e) => setValue({ username: e.target.value })}
            />
            <label htmlFor="inputPassword" className="sr-only">
            </label>
            <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                required
                autoComplete=""
                onChange={(e) => setPassword({ password: e.target.value })}
            />
            <button className="btn btn-lg btn-primary btn-block"
                    type="submit"
                    onClick={(e) => registration( value.username, password.password,email.email)}>
                <Link to="/" className="link link-light">Submit</Link>
            </button>
        </form>
    );
}

function registration( value: string, password: string, email: any) {
    if ((value.trim().length >=1) || (password.trim().length >=1) ) {
        axios.post(`${baseUrl}/auth/registration`, {
            username: value,
            password: password,
            email: email
        })
            .then(function (response) {

            })
            .catch(function (error) {
                console.log(error);
            });
    }


}

export  function SignIn() {
    const [value, setValue] = useState({username: ''});
    const [password, setPassword] = useState({password: ''})
    return (
        <form className="form-signin">

            <div> If you don't have account
                <Link to="sign" className="link"> Sign up</Link>
            </div>
            <label htmlFor="inputEmail" className="sr-only">
            </label>
            <input
                type="string"
                id="login"
                className="form-control"
                placeholder="Login"
                required
                autoFocus
                autoComplete=""
                onChange={(e) => setValue({ username: e.target.value })}
            />
            <label htmlFor="inputPassword" className="sr-only">
            </label>
            <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                required
                autoComplete=""
                onChange={(e) => setPassword({ password: e.target.value })}
            />
            <button className="btn btn-lg btn-primary btn-block" type="submit"
                    onClick={() => login(value.username, password.password)}>
                 <Link to="main" className="link link-light">Sign In</Link>
            </button>
        </form>
    );
}

function login( value: string, password: string) {
if ((value.trim().length >=1) || (password.trim().length >=1) ) {
    axios.post(`${baseUrl}/auth/login`, {
        username: value,
        password: password,
    })
        .then(response => {
            let token = response.data
            localStorage.setItem("token", token);
        }).catch(function (error) {
           ;
        });

}

}


