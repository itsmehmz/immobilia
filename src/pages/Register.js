import React from 'react'

const Register = () => {
  return (
    <div className='bg-sky-300 min-h-screen w-full flex justify-center'>
        <form action="#">
            <div className='border-2 border-black bg-cyan-400 rounded-3xl mt-20 h-[30rem] w-[35rem] '>
                <div className='items-center flex justify-center space-x-4 text-center font-oswald py-5 text-4xl border-2 border-b-black bg-white rounded-t-3xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <span>Sign IN</span>
                </div>

                <div className='grid grid-cols-2 space-x-5 text-xl font-oswald pt-5 px-6'>
                        <div className='bg- grid gap my-4 space-y-2'>
                            <label className='ml-2'>First Name</label>
                            <input type="text" name="fname" id="fname" className='border border-black rounded-3xl text-center font-mono' />
                        </div>
                        
                        <div className='grid gap my-4 space-y-2'>
                            <label className='ml-2'>Last Name</label>
                            <input type="text" name="lname" id="lname" className='border border-black rounded-3xl text-center font-mono' />
                        </div>
                </div>

                <div className='grid grid-cols-2 space-x-5 text-xl font-oswald px-6'>
                        <div className='grid gap my-4 space-y-2'>
                            <label className='ml-2'>Mail</label>
                            <input type="email" name="mail" id="mail" className='border border-black rounded-3xl text-center font-mono' />
                        </div>
                        
                        <div className='grid gap my-4 space-y-2'>
                            <label className='ml-2'>Phone</label>
                            <input type="text" name="phone" id="phone" className='border border-black rounded-3xl text-center font-mono'/>
                        </div>
                </div>

                <div className='grid grid-cols-2 space-x-5 text-xl font-oswald px-6'>
                        <div className='grid gap my-4 space-y-2'>
                            <label className='ml-2'>Password</label>
                            <input type="password" name="pass" id="pass" placeholder='***********' className='border border-black rounded-3xl text-center font-mono' />
                        </div>
                        
                        <div className='grid gap my-4 space-y-2'>
                            <label className='ml-2'>Confirm Pass</label>
                            <input type="password" name="cpass" id="cpass" placeholder='***********' className='border border-black rounded-3xl text-center font-mono'/>
                        </div>
                </div>

                <div id='btns' className='flex justify-evenly my-5'>
                <button className='border border-black bg-lime-300 text-xl font-mono rounded-2xl w-24 h-10' type="submit">Register</button> 
                <button className='border border-black bg-slate-400 text-xl font-mono rounded-2xl w-24 h-10' type="reset">Cancel</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Register