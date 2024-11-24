import React from 'react'

const Login = () => {
  return (
    <div className='bg-sky-300 min-h-screen w-full flex justify-center'>
        <form action="#">
            <div className='border-2 border-black bg-cyan-400 rounded-3xl mt-20 h-[25rem] w-[32rem] '>
                <div className='items-center flex justify-center space-x-4 text-center font-oswald py-5 text-4xl border-2 border-b-black bg-white rounded-t-3xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <span>Log In</span>
                </div>

                <div className='grid grid-row-2 space-x-5 text-2xl justify-center font-oswald pt-5 px-6'>
                        <div className='flex items-center justify-evenly space-x-14 my-4 space-y-2 '>
                            <label className='ml-7'>Mail</label>
                            <input type="text" name="mail" id="mail" className='border border-black rounded-3xl w-auto text-center font-mono h-12' />
                        </div>
                        
                        <div className='flex items-center justify-evenly space-x-3 my-4 space-y-2'>
                            <label className='ml-2'>Password</label>
                            <input type="password" name="pass" id="pass" className='border border-black rounded-3xl text-center font-mono h-12' placeholder='**********' />
                        </div>
                </div>

                <div id='btns' className='flex justify-evenly my-8'>
                <button className='border border-black bg-lime-300 text-xl font-mono rounded-2xl w-24 h-10' type="submit">Login</button> 
                <button className='border border-black bg-slate-400 text-xl font-mono rounded-2xl w-24 h-10' type="reset">Cancel</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Login