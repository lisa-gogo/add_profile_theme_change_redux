import React from 'react';
import {useDispatch} from 'react-redux';
import {login,logout} from "../featues/user";

function Login() {
    const dispatch = useDispatch()
    return (
        <div>
            <button    onClick={() => {
          dispatch(login({ name: "Pedro", age: 20, email: "pedro@gmail.com" }));
        }}>Login</button>

         <button className='logout' onClick={()=>{
             dispatch(logout())
         }}>LOGOUT</button>
        </div>
    )
}

export default Login
