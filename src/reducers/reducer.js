import {createSlice} from '@reduxjs/toolkit';

import { dataList } from '../data';
 const userSlice = createSlice(
    {
        name: "users",
        initialState: dataList,
        reducers:{
            addToList: (state, action)=>{
                console.log(action)
                state.push(action.payload)
            },

            updateList: (state, action)=>{
                const {id, name, email}=action.payload
                const ifExisting = state.find(i=>i.id==id)
                if(ifExisting)
                {
                    
                    ifExisting.name=name;
                    ifExisting.email=email;
                    
                }

            },

            dltFromList: (state, action)=>{
            return state.filter(item=>item.id!==action.payload.id)
            },

            
            // dltFromList: (state, action)=>{
            //     const id =action.payload
            //     const check =state.find(user=>user.id===id)
            //     if(check)
            //     return state.filter(item=>item.id!==id)
            // },
        }
    }
)

export default userSlice.reducer 
export const {addToList, dltFromList, updateList} = userSlice.actions


