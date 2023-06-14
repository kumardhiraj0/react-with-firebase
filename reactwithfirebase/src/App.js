import { getDatabase, ref, set } from "firebase/database";

import {app} from "./firebase";
import './App.css';
const database = getDatabase(app);

function App() {
  const putData = ()=>{
    set(ref(database,"users/dhiraj"),{
      id:1,
      name:"Dhiraj kumar",
      age:23
    })
  }
  return (
    <div className="App">
      <h2>React with firebase</h2>
      <button onClick={putData}>Put Data</button>
    </div>
  );
}

export default App;
