import React from 'react'

function Login() {
    return (
      <div className='flex flex-col gap-4 border shadow-md w-[40%] mx-auto p-4 mt-10 rounded-lg min-h-[16rem]'>
        <h1 className='text-2xl text-center font-semibold'>Login Form</h1>
        <form className='flex flex-col gap-4 items-center w-full'>
          <input 
            type="text" 
            placeholder="Username" 
            className="border w-full p-2 rounded-md max-w-xs"
            name='username'
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="border w-full p-2 rounded-md max-w-xs"
            name='password'
          />
          <button 
            className='btn p-2 rounded-md bg-[#7AB2B2] text-white w-full max-w-xs'
          >
            Login
          </button>
        </form>
      </div>
    );
  }
  
  export default Login;
