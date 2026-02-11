 import Students from "../Students.jsx";
function App() {
    return (
        <> 
          <Students name="Ahtisham khan" age={23} IsStudent={false}/>
          <Students name="Lotfullah MSL" age={22} IsStudent={true}/>
          <Students name="Ahmad Farooq" age={20} IsStudent={false}/>
          <Students name="Imsha Rehman" age={21} IsStudent={false}/>
          <Students />
        </>
        
    );
}

export default App
