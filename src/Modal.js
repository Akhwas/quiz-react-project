import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const {isModalOpen,index,questions,setQuestions,setData,setIsModalOpen,setWaiting,correct,setCorrect,setIndex,data} = useGlobalContext()
  const reset =()=>{
    setIsModalOpen(false)
    setWaiting(true)
    setData([])
    setCorrect(0)
    setIndex(0)
  }
  return <div className={isModalOpen?'modal-container isOpen':'modal-container'}>
    <div className='modal-content'>
    <h2> congrats!</h2>
    <p>you answered {correct*100/data.length}% of questions correctly</p>
    <button className='close-btn' onClick={reset}>play again</button>
    </div>
  </div>
}

export default Modal
