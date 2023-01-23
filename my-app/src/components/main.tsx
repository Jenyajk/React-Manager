import Header from "./header";
import {useEffect, useState} from "react";
import axios from 'axios';



const Main = () => {
    useEffect(() => {
        // axios.post('http://localhost:5000/auth/registration', {
        //     username: 'admin',
        //     password: 'admin',
        // })
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }, [])
    const [count, setCount] = useState([])
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Main;
