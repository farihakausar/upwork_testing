import React ,{useState,useEffect}from 'react'
import {
  NavLink,useNavigate
} from "react-router-dom";
import Emila from "../images/kiwify.png"
import validation from './Validation';
import { Link } from 'react-router-dom';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function Register() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
 const [values,setValues]=useState({
    email:"",
password:"",
reemail:"",
check:""
 })
 const [error,setError]=useState({})
  const navigate=useNavigate();
function handleChange(e){
    setValues({...values,[e.target.name]:e.target.value})
}
   function handleSubmit(e){
    e.preventDefault();
    setError(validation(values))
   }
   useEffect(() => {
    document.title = 'Cadastro'
}, []);
  return (
   <>
    
   <div className='  flex justify-center items-center my-[60px] md:my-[300px] lg:my-[60px] flex-col '>
    <div className=' flex justify-center items-center  flex-col'>
      <img src={Emila}alt="" height={80} width={200}/> 
     <h2 className='font-extrabold text-[30px] mt-[20px] '>Criar nova conta</h2>
      
   
     <div >
        <div className='flex space-x-3 md:mx-60 my-2'>
        <p>Ou</p>
        <Link to="/"className='right  text-indigo-600 font-semibold'> entrar na sua conta existente</Link></div>
     </div>
     <div className='bg-white shadow-md md:mx-20 mt-8  w-full h-[500px] px-[50px] md:rounded-xl md:px-[70px] flex justify-center items-center flex-col md:w-[400px]'>
      <form method='' className='mt-5' onSubmit={handleSubmit}>
      <label for="email" className="leading-7  text-right text-sm font-semibold">E-mail</label><br />
        <input type="email"name="email" id="email" value={values.email}onChange={handleChange} className="w-[300px] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"/><br />
        {error.email &&<p className='font-sm text-red-500 mt-2 text-xs'>{error.email}</p>}
      <label for="reemail" className="leading-7  text-right text-sm font-semibold">Repetir e-mail</label><br />
        <input type="email"name="reemail" id="reemail" value={values.reemail}onChange={handleChange} className="w-[300px] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"/><br />
        {error.reemail &&<p className='font-sm text-red-500 mt-2 text-xs'>{error.reemail}</p>}
        <label for="password" className="leading-7 pt-[900px] text-sm font-semibold ">Senha</label><br />
        <input type="password" id="password" value={values.password}onChange={handleChange}name="password" className="w-[300px] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"/><br />
        {error.password &&<p className='font-sm text-red-500 mt-2 text-xs'>{error.password}</p>}
        
<div className='flex flex-row mx-[-20px]'>
        <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="
Eu li e aceito os termos de uso, termos de licença de uso de software, política de conteúdo da Kiwify" />
      
    
  
    </FormGroup>
    </div> 
   {error.check &&<p className='font-sm  text-red-500 mb-3 text-xs'>{error.check}</p>}
   
   
   
     <button type="submit" className="rounded-lg px-20 py-2 text-white hover:bg-indigo-400 bg-indigo-600 w-[300px]" >Criar conta</button>
      

     
      </form>
      </div>
     </div>
    </div>
   
   
   </>
  )
  }

export default Register






  
  
 
  