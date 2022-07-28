import React, { useState } from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
function App() {
  const{waiting,loading,isModalOpen,setIsModalOpen,data,error,amount,questions,setQuestions,index,setIndex,correct,setCorrect} = useGlobalContext()
   
  const {correct_answer,incorrect_answers,question} = data[index] ||{}
  // console.log(correct_answer,incorrect_answers,question)
  
  let answers = incorrect_answers
  // const tryAns = [...incorrect_answers,correct_answer]
  // console.log(tryAns)
  // console.log(answers)
  let displayAnswers = []
  if(answers){
     let allAnswers = [...answers,correct_answer]
     let limit = new Set()
    for (let i=0;limit.size<4;i++){
      const rndNum = Math.floor((Math.random())*4)
      limit.add(allAnswers[rndNum])
      
      }

      displayAnswers = [...limit]
      console.log(displayAnswers)
    }
  
  const checkCorrect = (value)=>{
    if (displayAnswers[value]===correct_answer){
       setCorrect(correct+1)
    }
    if (index+1 === data.length){
      setIsModalOpen(true)
    }
    else{

      setIndex(index+1)
    }
    // setQuestions()

    }
  

  return <main >
    {waiting && <SetupForm/>}
    {loading && <Loading/>}
    {isModalOpen && <Modal/>}
    {!waiting && !loading &&!error &&<section className='quiz'>
      <p className='correct-answers'>
        correct answers : {correct}/{index}
      </p>
      <article className='container'>
        <h2 dangerouslySetInnerHTML={{__html:question}}/>
        <div className='btn-container'>{
          displayAnswers.map((answer,index)=>{
           return <button className='answer-btn' key = {index} onClick={()=>{checkCorrect(index)}}>{answer}</button>
          })
        }</div>
      </article>
      <button className='next-question' onClick={()=>setIndex(index+1)}>next question</button>
    </section>}
  </main>
}

export default App
