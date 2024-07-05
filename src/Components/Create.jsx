import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../features/reducer';
import { useNavigate } from 'react-router';

const Create = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // const id = users.length > 0 ? users[users.length - 1].id + 1 : 1; // Generate id here
        // dispatch(addUser({id, name, email }));
        dispatch(addUser({ name, email }));
        navigate('/');
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center' >
            <div className='w-50 border bf- secondary text-white p-5' style={{ backgroundColor: "grey" }}>
                <h3>Add New Task</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name' style={{ color: 'white' }}>Task:</label>
                        <input type='text' name='name' className='form-control' placeholder='Enter name' onChange={e => setName(e.target.value)} />
                    </div>
                    <br />
                    <button className='btn btn-info'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Create;