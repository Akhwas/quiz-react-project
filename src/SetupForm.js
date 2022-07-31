import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const{amount,setAmount,category,setCategory,table,difficulty,setDifficulty,submitHandle,handleCategory,error} = useGlobalContext()
  return <section className='quiz quiz-small'>
    
      <form className='setup-form' >
      <h2>setup quiz</h2>
      <div className='form-control'>
        <label htmlFor='amount'>number of questions</label>
        <input type='number'name='amount' className='form-input' value ={amount} min = '1' max = '50' onChange={(e)=>{setAmount(e.target.value)}}></input>
      </div>
      <div className='form-control'>
        <label htmlFor = 'category'>category</label>
        <select defaultValue='sports' name = 'category' className='form-input' onChange={(e)=>handleCategory(e.target.value)}>
          <option value = 'sports'>sports</option>
          <option value = 'history'>history</option>
          <option value = 'politics'>politics</option> 
        </select>
      </div>
      <div className='form-control'>
        <label htmlFor = 'difficulty' >difficulty</label>
        <select value={difficulty} name = 'difficulty' className='form-input'onChange={(e)=>{setDifficulty(e.target.value)}}>
          <option value = 'easy'>easy</option>
          <option value = 'medium'>medium</option>
          <option value = 'hard'>hard</option> 
        </select>
      </div>
      {error && (<p className='error'>Can't Generate Questions, Please Try Different parameters</p>)}
      <button type='submit' onClick={(e)=>{submitHandle(e)}}className='submit-btn' >start</button>
    </form>
  </section>
}

export default SetupForm
