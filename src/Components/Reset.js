import React ,{useState,useEffect}from 'react'

import Emila from "../images/kiwify.png"
import validation from './Validation';
import { Link } from 'react-router-dom';

function Reset() {
 const [values,setValues]=useState({
    email:"",
password:""
 })
 const [error,setError]=useState({})
//   const navigate=useNavigate();
function handleChange(e){
    setValues({...values,[e.target.name]:e.target.value})
}
   function handleSubmit(e){
    e.preventDefault();
    setError(validation(values))
   }
   useEffect(() => {
    document.title = 'Redefinir  senha'
}, []);
  return (
   <>
    
   <div className='  flex justify-center items-center my-[60px] md:my-[300px] lg:my-[60px] flex-col '>
    <div className=' flex justify-center items-center  flex-col'>
      <img src={Emila}alt="" height={80} width={200}/> 
     <h2 className='font-extrabold text-[30px] mt-[20px] '>Redefinir a senha</h2>
      
   <p>Você receberá um e-mail com instruções para</p>
   <p> redefinir a senha</p>
     <div className='bg-white shadow-md mx-20 mt-8  w-full h-[200px] md:rounded-xl  flex justify-center items-center flex-col md:w-[400px]'>
      <form method='' className='mt-5' onSubmit={handleSubmit}>
      <label for="email" className="leading-7  text-right text-sm font-semibold">E-mail</label><br />
        <input type="email"name="email" id="email" value={values.email}onChange={handleChange} className="w-[300px] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"/><br />
        {error.email &&<p className='font-sm text-red-500 mt-2 text-xs'>{error.email}</p>}
        
            
       
        <br />
     <button type="submit" className="rounded-lg px-20 py-2 text-white hover:bg-indigo-400 bg-indigo-600 w-[300px]" >Redefinir senha</button>
      

     
      </form>
      </div>
     </div>
    </div>
   
   
   </>
  )
  }

export default Reset






  
  
 
  