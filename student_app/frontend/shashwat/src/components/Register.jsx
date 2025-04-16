import React from 'react'
import axios from 'axios'
const Register=()=>{
    const handlerRegister = async(e)=>{
        e.preventDefault()
        const user = {
            name : e.target.name.value,
            age : e.target.age.value
        }
        await axios.post()
    }
}
function Register() {
  return (
    <div>
        <form onSubmit={handlerRegister}>
            <label htmlFor="">Name:</label><input type="text"  name  = 'name'/>
            <label htmlFor="">Age:</label><input type="text"  name  = 'age'/>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register