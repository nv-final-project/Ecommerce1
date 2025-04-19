
import { useState } from "react";

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [fullName , setFullName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const loginHandler = () => {
        setIsLogin(!isLogin);
        // console.log(isLogin);
    }
    
    const getInputData = (e) => {
        e.preventDefault()
        console.log(fullName, email, password);
        setFullName("")
        setEmail("")
        setPassword("")
    }

    return <>
        <form onSubmit={getInputData} className="flex items-center justify-center h-screen mx-auto max-w-[1400px] ">
              <div className="flex flex-col shadow-md items-center h-[400px] w-[440px] rounded-[12px] bg-white">
            <h3 className="text-black text-[1.5rem] my-[30px]">{isLogin ? "Login" : "Sign Up" }</h3>
            {
                !isLogin && <input value= {fullName} onChange={(e) => setFullName(e.target.value)} className="text-[1.1rem] w-[310px]  p-[10px] mb-[12px] outline-none border-[1px] border-gray-400 rounded-[6px]" type="text" placeholder="Full Name" required /> 
            }
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="text-[1.1rem] w-[310px]  p-[10px] mb-[12px] outline-none border-[1px] border-gray-400 rounded-[6px]" type="email" placeholder="Email" required />
            <input value={password} onChange={(e) => setPassword(e.target.value)} className="text-[1.1rem] w-[310px] p-[10px]  mb-[12px] outline-none border-[1px] border-gray-400 rounded-[6px]" type="password" placeholder="Password" required />
            <button  className="h-[46px] cursor-pointer w-[310px] block mx-auto rounded-[5px] bg-[#4c64fd] text-white hover:bg-amber-500 active:bg-amber-500">{isLogin ? "Login" : "Sign Up" }</button>
                    <span onClick={loginHandler} className="h-[46px] cursor-pointer w-[310px] mt-[10px]  mx-auto rounded-[5px] bg-[#4c64fd] text-white flex justify-center items-center hover:bg-amber-500 active:bg-amber-500  hover:text-white">{isLogin ? "Don't have an account? Sign Up" : "Already have a account? Login"}</span>
              </div>
         </form>
        </>
    
}


export default LoginPage;