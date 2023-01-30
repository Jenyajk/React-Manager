import './main.css'
import {useEffect, useState} from "react";
import axios from 'axios';
import {baseUrl} from "../app";
import {Form, Link, Navigate, useNavigate} from "react-router-dom";
import {FormControl, InputGroup, Table} from "react-bootstrap";
import {isAccordionItemSelected} from "react-bootstrap/AccordionContext";

interface Item {
    id: string,
    username: string
    email: string
}

const Main = () => {
    const [items, setItems] = useState<any[]>([]);

     let token = localStorage.getItem('token')

    useEffect(() => {
        axios({
            method: "get",
            url: `${baseUrl}/auth/users`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(res =>
            setItems(res.data)

        )
    }, [])
    let data = items.map((e)=> {
        return <tr key={e._id}>
            <td><InputGroup.Checkbox className="mb-3"
                                     aria-label="Checkbox for following text input"
            />
            </td>
            <td>id</td>
            <td>{e.username}</td>
            <td>{e.email}</td>
            <td>last time</td>
            <td>last time</td>
            <td>Active</td>
        </tr>;
    })
        return (
            <div>
                <button onClick={logout} className={"button-logout"}>
                    <Link className={"button-link"} to="/React-Manager">logout</Link></button>
                <Table striped bordered hover >
                    <thead>
                    <tr>
                        <th>
                            <InputGroup.Checkbox className="mb-3"
                                                 aria-label="Checkbox for following text input"/>
                        </th>
                        <th>ID</th>
                        <th>LOGIN</th>
                        <th>EMAIL</th>
                        <th>last login time</th>
                        <th>registration time</th>
                        <th>status</th>
                    </tr>
                    </thead>
                    <tbody >
                    {data}
                    </tbody>
                </Table>
            </div>
        )
        function logout() {
            localStorage.clear()
        }
    }
    ;



export default Main;
