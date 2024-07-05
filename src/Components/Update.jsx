import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import {updateUser} from '../features/reducer';


const Update = () => {
    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const existingUser= users.filter(f => f.id == id);
    const {name, email} = existingUser[0];
    const [uname, setName] = useState(name)
    const [uemail, setEmail] = useState(email)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id: id,
            name: uname,
            email: uemail
        }))
        navigate('/')
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center' >
        <div className='w-50 border bf- secondary text-white p-5' style={{  backgroundColor: "grey" }}>
            <h3>Update Task</h3>
            <form onSubmit={handleUpdate}>
                <div>
                    <label htmlFor='name' style={{ color: 'white' }}>Task:</label>
                    <input type='text' name='name' className='form-control' placeholder='enter name'
                    value={uname} onChange={e => setName(e.target.value)}/>
                </div>
                <br></br>
                <button className='btn btn-info'>Update</button>
            </form>
        </div> 
    </div>
  )
}

export default Update