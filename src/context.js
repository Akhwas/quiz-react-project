import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'




const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading,setLoading] = useState(false)
  const [amount,setAmount] = useState(10)
  const [category,setCategory] = useState(table.sports)
  const [difficulty,setDifficulty] = useState('easy')
  const [waiting,setWaiting] = useState(true)
  const [correct,setCorrect] = useState(0)
  const [isModalOpen,setIsModalOpen] = useState(false)
  const [error,setError] = useState(false)
  const[data,setData] = useState([])
  const [index,setIndex] =useState(0)
  const submitHandle =(e)=>{   
    setError(false)
    const tempUrl = `${API_ENDPOINT}amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
      e.preventDefault()
      fetchQuestions(tempUrl)
      console.log(category,difficulty)
  }
  const handleCategory=(value)=>{
    console.log(value)
    // console.log(table[1])
    setCategory(table[value])
    console.log(category)
   
  }
  const fetchQuestions = async(url) =>{
      setWaiting(false)
      setLoading(true)
      
      try {
        
        const response = await axios.get(url)
        // const data = await response.json()
        if (response){
          const myArray = response.data.results
          console.log(myArray)

          if (response.data.results.length == 0){
            setWaiting(true)
            setError(true)
            console.log('ha?')
            
          }else{
            setWaiting(false)
            setData(response.data.results)
            console.log('la')
  
          }
        }
        console.log(response)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
  }
  // useEffect(()=>{
  //     fetchQuestions(tempUrl)
  // },[submitHandle])
  return <AppContext.Provider value={{loading,setLoading,amount,setAmount,category,setCategory,difficulty,setDifficulty,submitHandle,handleCategory,waiting,setWaiting,loading,data,setData,isModalOpen,setIsModalOpen,error,index,setIndex,correct,setCorrect}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
