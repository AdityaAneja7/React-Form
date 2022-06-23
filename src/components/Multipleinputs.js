import React, { useState } from 'react'

const Multipleinputs = () => {
   const [userRegistration,setuserRegistration]= useState({
    username: "",
    email:"",
    role:"",
    password:""
    } );
    const [userRecord,setuserRecord]= useState([]);

   const handleInput = (e)=>{
    const name= e.target.name;
    const value =e.target.value;
    console.log(name + value)
    setuserRegistration({...userRegistration, [name]: value})
   }
   const handleSubmit = (e)=>{
    e.preventdefault(); 

    const newRecord ={...userRegistration, id: new Date().getTime().toString()}
    console.log(newRecord);
    setuserRecord([...userRecord,newRecord])
    console.log(newRecord);
   }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Name</label>
            <input type="text" value={userRegistration.username} onChange={handleInput} name='username' id='username' />
        </div>
        <div>
            <label htmlFor="email">email</label>
            <input type="text" value={userRegistration.email} onChange={handleInput} name='email' id='email' />
        </div>
        <div>
            <label htmlFor="role">role</label>
            <input type="text" value={userRegistration.role} onChange={handleInput} name='role' id='role' />
        </div>
        <div>
            <label htmlFor="password">password</label>
            <input type="text" value={userRegistration.password} onChange={handleInput} name='password' id='password' />
        </div>
        <button type='submit' >Submit </button>
    </form>
    <div>
        
    </div>
    </>
  )
}

export default Multipleinputs
