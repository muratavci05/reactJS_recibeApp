function App() {

  const APP_ID = "bc2440e7";
  const APP_KEY = "ed7d2e1bc9f2b2a57407fd01387a4eb8";
 
 
  const exampleReg = 
  `https://api.edamam.com/api/recipes/v2/0123456789abcdef0123456789abcdef?app_id=${APP_ID}&app_key=${APP_KEY}&type=public`;

  return (
    <div className="App">
      <div className="container" style={{width:"500px"}} >
        <form className="form-control " style={{display:"flex",justifyContend:"center",marginTop:"20px"}}> 
          <input className="form-control" type="text" />
          <button className="btn btn-primary" type="submit">Search</button>
        </form>
      
      </div>
      
    </div>
  );
}

export default App;
