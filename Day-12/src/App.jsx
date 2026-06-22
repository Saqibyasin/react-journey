import { useState,useEffect } from "react";
function App(){
  const[userData,setUserData] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(()=>{
    
    async function fetchUser(){
      try{
      const response = await fetch("https://api.github.com/users/saqibyasin");
      if(!response.ok){
        throw new Error("User Not Found");
      }
      const data =await response.json();
      setUserData(data);
    }catch (error){
      setError(error);
    }finally{
      setLoading(false);
    }
  }
    fetchUser();

  },[])
  if(loading){
        return <p>Loading...</p>
  }
  else if(error) {
        return <p>{error.message}</p>
  }
  else{
    return(
    <>
    <img src = {userData.avatar_url}/>
    <h2>{userData.name}</h2>
    <p>{userData.bio}</p>
    </> 
  
)
  }
}

export default App;