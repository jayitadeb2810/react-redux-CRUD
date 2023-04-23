import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { dltFromList} from '../reducers/reducer'


const Home = () => {
    const users = useSelector(state=>state.user)
    console.log(users)
    const dispatch = useDispatch();

    const deleteHadler=(id)=>{
        // eve.preventDefault();
        dispatch(dltFromList({id}))

    }
    
  return (
    <div className='container'>
        <h2>CRUD Operation</h2>
        <Link to={'/createData'}>
            <button className='btn btn-success my-1' >Create+</button>
        </Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th> 
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map(item=>(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td><Link to={`/Update/${item.id}`} className='btn btn-sm btn-primary'>Edit</Link></td>
                        <td><button className='btn btn-sm btn-danger' onClick={()=>{deleteHadler(item.id)}}>Delete</button></td>
                    </tr>
                ))}

            </tbody>
        </table>
    </div>
  )
}

export default Home