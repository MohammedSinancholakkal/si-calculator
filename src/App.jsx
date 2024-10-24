import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css'
import { useState } from 'react';


function App() {

  const[principle,setPrinciple]=useState(0)
  const[year,setYear]=useState(0)
  const[rate,setRate]=useState(0)
  const[interest,setInterest]=useState(0)
  const[IsInputValid,setIsInputValid]=useState(false)
  const[Isyear,setIsYear]=useState(false)
  const[Israte,setIsRate]=useState(false)


  const handlevalidation=(tag)=>{
    const {name,value}=tag
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if(!!value.match(/^\d*.?\d+$/)){
      //valid
      if(name == "principle"){
        setPrinciple(value)
        setIsInputValid(false)

      }
      else if(name == "year"){
        setYear(value)
        setIsYear(false)
      }
      else{
        setRate(value)
        setIsRate(false)

      }

    }else{
      //invalid
      if(name == "principle"){
        setPrinciple(value)
        setIsInputValid(true)
      }
      else if(name == "year"){
        setYear(value)
        setIsYear(true)
      }
      else{
        setRate(value)
        setIsRate(true)
      }
    }
    

  }

  const handlecalculate=(e)=>{
    e.preventDefault()
    setInterest((principle*year*rate)/100)
    
    
    
  }
  const handleReset=()=>{
    setPrinciple("")
    setYear("")
    setRate("")
    setInterest("")
    setIsInputValid(false)
    setIsYear(false)
    setIsRate(false)

  }

  return (
    <>
  <div style={{minHeight:'100vh',width:'100%'}}className="d-flex justify-content-center align-items-center p-5 rounded bg-warning">
    <div className='box  bg-info p-5 rounded'>
      <h2 className='text-light fw-bolder' style={{textDecoration:'underline'}}>Simple-Interest-Calculator</h2>
      <p style={{textAlign:'center'}}className='text-light'>calculate your simple interest with us</p>
      <div className="d-flex justify-content-center align-items-center p-5 rounded bg-warning">
        <h1 className='text-danger'>&#8377; {interest} </h1>
      </div>
      <div className='mt-5'>
          <form className='border rounded d-flex flex-column p-3'>        
         <TextField id="principle" name='principle' value={principle} label="Principle Amount" variant="outlined"  onChange={e=> handlevalidation(e.target)}/>
         {IsInputValid && <div className=' mb-2 text-danger fw-bolder'>*Invalid Input</div>}
         <TextField id="year" name='year' value={year} label="Year"  variant="outlined"   onChange={e=> handlevalidation(e.target)}/>
        { Isyear && <div className=' mb-2 text-danger fw-bolder'>*Invalid Input</div>}
         <TextField id="rate" name='rate' value={rate}  label="Rate of interest" variant="outlined"  onChange={e=> handlevalidation(e.target)} />
       { Israte &&  <div className=' mb-2 text-danger fw-bolder'>*Invalid Input</div>}
          </form>
        </div>
        <div className='rounded mt-3 d-flex justify-content-between'>
        <Button variant="contained" type='submit' onClick={handlecalculate}>Calculate</Button>
        <Button variant="outlined" onClick={handleReset}>Reset</Button>

        </div>
    </div>

  </div>

     
    </>
  )
}

export default App