import { useEffect, useState } from 'react';
import { Route, Routes} from 'react-router-dom';
import './App.css';
import AddStudents from './Components/AddStudents';
import DashBoard from './Components/DashBoard';
import LoginPage from './Components/LoginPage';
import Nopage from './Components/Nopage';
import SignupPage from './Components/SignupPage';
import Students from './Components/Students';
import UpdateStudents from './Components/UpdateStudents';


function App() {
  const [students, setStudents] = useState([]);
  
  useEffect(()=>{
    const getStudents = async () =>{
        const response = await fetch("https://644b33bc4bdbc0cc3a8ce28c.mockapi.io/users", {
          method:"GET",
        }); 
        const data = await response.json();
        if(data){
          setStudents(data)
        }
    }
    
      getStudents();
    
    
  }, )

  return (
    <div className="App">
      <Routes>

<Route exact path="/"
  element={<DashBoard/>} />

<Route path="/login"
  element={<LoginPage />}
/>

<Route path="/signup"
  element={<SignupPage />}
/>
<Route path="/students"
            element={<Students
            students = {students}
            setStudents ={setStudents}/>}
            />
          
          <Route path="/addstudents"
            element={<AddStudents
            students = {students}
            setStudents ={setStudents}/>}
            />
         
         <Route path="/edit/:id"
            element={<UpdateStudents
              students = {students}
              setStudents ={setStudents}/>}
            />
           
           <Route path="**"
              element={<Nopage/>}
          />

</Routes>
    </div>
  );
}

export default App;