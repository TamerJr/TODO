import React, { useState } from 'react'
import {BiMessageSquareAdd} from "react-icons/bi"
const SearchBar = ({ tasks,setTasks}) => {
    const [newTask,setNewTask]=useState("")
    const handleAdd=(e)=>{
      e.preventDefault()
      setTasks(oldTasks=>[...oldTasks,newTask])
      setNewTask("")
    }
  return (
    <form onSubmit={handleAdd}>
        <input type="text" placeholder='Add Tasks' value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
        <button type='submit'className='ADD'> <BiMessageSquareAdd/></button>
    </form>
  )
}

export default SearchBar