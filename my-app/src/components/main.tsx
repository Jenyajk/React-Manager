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
    // const [data, setData] = useState([])
    // let t: never[] = []
    // let token = localStorage.getItem('token')
    //  axios({
    //     method: "get",
    //     url: `${baseUrl}/auth/users`,
    //     headers: {
    //         Authorization: `Bearer ${token}`,
    //     },
    // }).then((response) => {
    //    setData(response.data)
    //
    // });
    // console.log(data)

    const [checked, setChecked] = useState([])


    return (
        <div>
            <button  onClick={logout} className={"button-logout"}>
                <Link className={"button-link"} to="/" >logout</Link></button>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>
                        <InputGroup.Checkbox className="mb-3"
                                             aria-label="Checkbox for following text input" />
                    </th>
                    <th>ID</th>
                    <th>LOGIN</th>
                    <th>EMAIL</th>
                    <th>last login time</th>
                    <th>registration time</th>
                    <th>status</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><InputGroup.Checkbox className="mb-3"
                                             aria-label="Checkbox for following text input"
                    />
                    </td>
                    <td>data</td>
                    <td></td>
                    <td></td>
                    <td>item.id</td>
                    <td>item.id</td>
                    <td>item.id</td>
                </tr>
                </tbody>
            </Table>
        </div>
    )

};

function  logout() {
    localStorage.clear()
}
// function getToken(t:any){
//      axios({
//          method: "get",
//          url: `${baseUrl}/auth/users`,
//          headers: {
//              Authorization: `Bearer ${t}`,
//         },
//      }).then((response) => {
//          console.log(response.data);
//      });
//  }

export default Main;
