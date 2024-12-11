import React from 'react'
import { useState } from 'react'
import '../styleform.css';

const Form = () => {
 const[userName,setUsername]=useState('');
 const[email,setEmail]=useState('');
 const[password,setPassword]=useState('');
 const[confirmPassword,setConfirmPassword]=useState('');


 const[errorUserName,setErrorUserName]=useState('');
 const[errorEmail,seterrorEmail]=useState('');
 const[errorpassword,seterrorpassword]=useState('');
 const[errorconformpassword,seterrorConfirmPassword]=useState('');

 const[userColor,setUsercolor]=useState('');
 const[emilColor,setEmailcolor]=useState('');
 const[passwordColor,setPasswordcolor]=useState('');
 const[confirmPasswordcolor,setConfirmPasswordcolor]=useState('');




 const handler=(e)=>{
    e.preventDefault()
    if(userName.length>8){
        setErrorUserName('');
        setUsercolor('green');
        
    }
    else{
        setErrorUserName('User name must be 8 letters long');
        setUsercolor('red');
    }

    if(email.includes('@gmail.com')){
        seterrorEmail('');
        setEmailcolor('green')
    }
    else{
        seterrorEmail("Email contains @gmail.com");
        setEmailcolor('red');
    }

    if(password.length>8){
        seterrorpassword('');
        setPasswordcolor("green");
    }
    else{
        seterrorpassword('password must contains 8 charachters');
        setPasswordcolor('red')
    }
    if(confirmPassword==password && password!=''){
        seterrorConfirmPassword('');
        setConfirmPasswordcolor('green')
    }
    else{
        seterrorConfirmPassword('password didnt not match');
        setConfirmPasswordcolor('red');
    }
 }
 
 


  return (
    <div className='card'>
        <div className='card-image'></div>
        <form>
            <input type='text' placeholder='Name'  style={{borderColor:userColor}} value={userName} onChange={(e)=> setUsername(e.target.value)}/>
            <p className='error'>{errorUserName}</p>
            <input type='text' placeholder='email' style={{borderColor:emilColor}} value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <p className='error'>{errorEmail}</p>
            <input type="password" placeholder='password' style={{borderColor:passwordColor}} value={password} onChange={(e)=> setPassword(e.target.value)} />
            <p className='error'>{errorpassword}</p>
            <input type="password" placeholder='conform password' style={{borderColor:confirmPasswordcolor}} value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
            <p className='error'>{errorconformpassword}</p>
            <button  className="submit-btn"onClick={handler}>submit</button>
        </form>
    </div>
  )
}

export default Form