import "bootstrap/dist/css/bootstrap.min.css";
import "./auth.css";
import {Link} from "react-router-dom";


export default function Auth() {
    return (
        <form className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <button type="button"  >
                <Link to="/sign">Sign In</Link>
            </button>
            <label htmlFor="inputEmail" className="sr-only">
            </label>
            <input
                type="string"
                id="login"
                className="form-control"
                placeholder="Login"
                required
                autoFocus
            />
            <label htmlFor="inputPassword" className="sr-only">
            </label>
            <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                required
            />
            <button className="btn btn-lg btn-primary btn-block" type="submit">
                Sign up
            </button>
        </form>
    );
}
