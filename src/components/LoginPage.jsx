import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return <section className="flex items-center justify-center h-screen mx-auto max-w-[1400px]">
              <div className="flex flex-col shadow-md items-center h-[400px] w-[440px] rounded-[12px] bg-white">
            <h3 className="text-black text-[1.5rem] my-[30px]">Login</h3>
            <input className="text-[1.1rem] w-[310px]  p-[10px] mb-[12px] outline-none border-[1px] border-gray-400 rounded-[6px]" type="email" placeholder="Email" required />
            <input className="text-[1.1rem] w-[310px] p-[10px]  mb-[12px] outline-none border-[1px] border-gray-400 rounded-[6px]" type="password" placeholder="Password" required />
            <button className="h-[46px] cursor-pointer w-[310px] block mx-auto rounded-[5px] bg-[#4c64fd] text-white hover:bg-amber-500">Login</button>
            <Link to='/SignUp' onClick={ ()=> console.log('link clicked')
                }>
                    <span className="h-[46px] cursor-pointer w-[310px] mt-[10px]  mx-auto rounded-[5px] bg-white flex justify-center items-center hover:bg-amber-500 hover:text-white">Don't have an account? Sign Up</span>
                </Link>
              </div>
  </section>

};

export default LoginPage;
