import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'






const Petition = () => {
 

  const [data,setData]=useState({})
  const [isCentimeters,setIsCentimeters]=useState(true)



  useEffect(()=>{
    
  
    navigator.geolocation.getCurrentPosition(success);
    

    function success(pos) {
    
      const crd = pos.coords;
    
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=3bdd4dbf1a5e33dbeab8bb3aae92f839`)
      .then(res=>{
        res.data.main.temp=parseInt(res.data.main.temp-273.15)
        setData(res.data)
      })
      
    }  
  },[])

 console.log(data);

  return (
    <div>


      <h1>country:{data.sys?.country}</h1>
      <h2>City:{data.name}</h2>
      <img src={`http://openweathermap.org/img/wn/${data.weather?.[0].icon}.png`} alt="" />
      <h2>Temperature:{isCentimeters?data.main?.temp:parseInt(1.8*data.main?.temp +32)}{isCentimeters?'°C':'°F'}</h2>
      <button onClick={()=>setIsCentimeters(!isCentimeters)}>Change temperature {!isCentimeters?'°C':'°F'}</button>
    
     
    </div>
  );
};

export default Petition;