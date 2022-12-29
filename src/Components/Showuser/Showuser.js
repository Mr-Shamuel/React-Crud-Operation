import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Showuser = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [mode, setMode] = useState("");
    // toggle table 
    const handleToggle = (e) => {
        setMode(e.target.checked)

    }
    //geting Data
    const GetData = () => {
        axios.get('https://63ac4337da81ba97617eebed.mockapi.io/Crud_Operation')
            .then(res => setUsers(res.data))
    }

    useEffect(() => {
        GetData();
    }, [])

    // delete users
    const handleDlete = (id) => {
        axios.delete(`https://63ac4337da81ba97617eebed.mockapi.io/Crud_Operation/${id}`)
            .then(res => {
                //window.location.reload()

                GetData();
                toast.success('Delete Successfull', {
                    position: "bottom-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

            })


    }

    // Edit users
    const handleEdit = (id, name, email) => {
        navigate(`/userUpdate/${id}`);
        localStorage.setItem("Keyid", id);
        localStorage.setItem("Keyname", name);
        localStorage.setItem("Keyemail", email);

    }
    return (
        <div className='d-flex justify-content-center pt-5 '>

            {/* toggle table  */}
            <Form.Check
                type="switch"
                id="custom-switch"
                label={mode ? "Light Mode" : "Dark Mode"}
                onChange={handleToggle}
            />


            <table className={mode ? "table table-dark w-50" : "table table-hover w-50"}>
                <thead  >
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>

                {
                    users.map(user => {
                        const { id, name, email } = user;
                        return (
                            <tbody key={id}>
                                <tr >
                                    <th scope="row">{id}</th>
                                    <td>{name}</td>
                                    <td>{email}</td>

                                    <td><button onClick={() => handleEdit(id, name, email)} className='btn btn-outline-info'>Edit</button></td>

                                    <td><button onClick={() => handleDlete(id)} className='btn btn-outline-danger'>Delete</button></td>
                                </tr>


                            </tbody>
                        );
                    })
                }


            </table>
            <ToastContainer
                position="bottom-center"
                autoClose={1500}
                limit={3}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

        </div>
    );
};

export default Showuser;