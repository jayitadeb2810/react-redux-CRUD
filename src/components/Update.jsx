import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {updateList} from '../reducers/reducer'

const Update = () => {
const {id} =useParams()
const users =useSelector(state=>state.user)
let existingUser =users.filter(i=>i.id==id)
const {name, email} = existingUser[0]
const [uname, setUname] =useState(name)
const [uemail, setUemail] =useState(email)
const dispatch =useDispatch()
const navigate= useNavigate()

const submitHandler=(eve)=>{
    eve.preventDefault();
    dispatch(updateList({id:id, 
                        name:uname, 
                        email:uemail}))
    navigate('/')

}

  return (
    <div className=''>
        <h2>Update Details</h2>
        <div className='p-5'>
            <form >
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" value={uname} id="name" className='form-control' 
                     onChange={(eve)=>setUname(eve.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" value={uemail} id="email" className='form-control'
                    onChange={(eve)=>setUemail(eve.target.value)} />
                </div>
                <button className='btn btn-info mt-3' onClick={submitHandler} >Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Update