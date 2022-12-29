import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Adduser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        axios.post('https://63ac4337da81ba97617eebed.mockapi.io/Crud_Operation', {
            name: name,
            email: email,
        })
            .then((response) => {
                console.log(response);

                navigate('/showuser');
            });


        e.preventDefault();
    }
    return (
        <div>
            <h1 className='text-center pt-5'>Add users : </h1>
            <div className=' d-flex align-items-center justify-content-center'>

                <form className='w-50 ' onSubmit={handleSubmit}>

                    <label >Name</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="name" className="form-control py-2 my-2" id="name" aria-describedby="name" placeholder="Enter Name" />

                    <label >Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control py-2 my-2" id="email" placeholder="Enter Email" />

                    <button type="submit" className="btn btn-success mt-2">Add user</button>
                </form>

            </div>

        </div>
    );
};

export default Adduser;