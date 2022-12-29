import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const UpdateUser = () => {
    const navigate = useNavigate();
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        setId(localStorage.getItem('Keyid'));
        setName(localStorage.getItem('Keyname'));
        setEmail(localStorage.getItem('Keyemail'));
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();


        axios.put('https://63ac4337da81ba97617eebed.mockapi.io/Crud_Operation/' + id, {
            name: name,
            email: email,
        })
            .then((response) => {
                console.log(response);

                navigate('/showuser');
            });



    }



    return (
        <div>

            <h1 className='text-center pt-5'> update user   : </h1>
            <div className=' d-flex align-items-center justify-content-center'>

                <form className='w-50 ' onSubmit={handleUpdate}>

                    <label >Name</label>
                    <input onChange={(e) => setName(e.target.value)} name='name' value={name} type="name" className="form-control py-2 my-2" id="name" aria-describedby="name" placeholder="Enter Name" />

                    <label >Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} name='email' value={email} type="email" className="form-control py-2 my-2" id="email" placeholder="Enter Email" />


                    <button type="submit" className="btn btn-warning mt-2">Update user</button>
                </form>

            </div>
        </div>
    );
};

export default UpdateUser;