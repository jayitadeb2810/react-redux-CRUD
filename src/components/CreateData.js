import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {addToList} from '../reducers/reducer'

const CreateData = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const dispatch= useDispatch();
    const users = useSelector(state=>state.user)
    const navigate =useNavigate()
    console.log(users)
    const submitHandler= (e)=>{
        e.preventDefault();
        dispatch(addToList({id:users[users.length-1].id + 1, name, email}))
        navigate('/')
    }
  return (
    <div className=''>
        <h2>Enter Details</h2>
        <div className='p-5'>
            <form >
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" value={name} id="name" className='form-control' 
                     onChange={(eve)=>setName(eve.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} id="email" className='form-control'
                    onChange={(eve)=>setEmail(eve.target.value)} />
                </div>
                <button className='btn btn-info' onClick={submitHandler}>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreateData