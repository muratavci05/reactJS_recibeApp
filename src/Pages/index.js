import React,{useState,useEffect} from "react";


const Regibe = (props) =>{

    const APP_ID = "bc2440e7";
    const APP_KEY = "ed7d2e1bc9f2b2a57407fd01387a4eb8";
   
   
    const exampleReg = 
    `https://api.edamam.com/api/recipes/v2/0123456789abcdef0123456789abcdef?app_id=${APP_ID}&app_key=${APP_KEY}&type=public`;
  
    const [counter, setCounter]= useState(0);
  
    useEffect(()=>{
      console.log('effect has been run');
  
    },[]);

    return(
        <div className="container" 
        style={{width:"500px"}} >
    <form className="form-control " 
          style={{display:"flex",justifyContend:"center",marginTop:"20px"}}
          > 
        <input className="form-control" 
                type="text" />
         <button className="btn btn-primary" type="submit" >Search</button>
      </form>
      <h1 className="position-absolute" style={{color:"green",marginLeft:"200px"}} onClick={()=>setCounter(counter + 1)}>{counter}</h1>
          
  
  </div>
    )
}

export default Regibe;