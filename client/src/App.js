import './index.css'
function App() {
  const signIn = async () => {
    try {
      
      window.location.href = "http://localhost:8085/auth/google";
    
    callBacks()
    } catch (error) {
      console.error("Error authenticating with Google:", error);
    }
  };

const callBacks=()=>{
fetch('http://localhost:8085/auth/google/callback')
.then(response => response.json())
.then(data => {
   
    console.log(data);
})
.catch(error => {
    console.error('Error:', error);
});
}
  return(
    <>
    <div className="signIn">
    <div>
      <h1>Welcome To Tenser</h1>
    <button onClick={signIn}>Sign In</button>
    </div>
    </div>
    </>
  )
}
export default App;