//import { app } from "./firebase";
//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./App.css";
import SignUp from "./components/pages/SignUp";
import SignInpage from "./components/pages/SignInpage";

//const auth = getAuth(app);

function App() {
  // const signUpUser = () => {
  //   createUserWithEmailAndPassword(
  //     auth,
  //     "dk@gmail.com",
  //     "dhiraj@123").then((val)=>console.log(val));
  // };

  return (
    <div className="App">
      <h2>React with firebase</h2>
      <SignUp/>
      <SignInpage/>
    </div>
  );
}

export default App;
