import './App.css'
import { useState,useEffect } from 'react';
import Petition from './Components/Petition';
import ClipLoader from "react-spinners/ClipLoader";


function App() {

  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
        setLoading(false)
    },4000)
  },[])

 

  return (
  

    <div className="App">
      {
        loading ?
        <ClipLoader
        size={30}
        color={'#123abc'}
        loading={loading}
        />
        :
        <Petition/>
      }
      
      
      
    </div>
  )
}

export default App
