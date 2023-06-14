import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";
const auth = getAuth(app);
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, pass).then((val)=> alert("success"));
  };
  return (
    <div className="sign-up">
        <h2>SignUp page</h2>
      <label htmlFor="my-email">Email:</label>
      <input
        name="email"
        id="my-email"
        type="email"
        value={email}
        placeholder="Enter your email here.."
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="pass">Password:</label>
      <input
        name="password"
        id="pass"
        type="password"
        value={pass}
        placeholder="Enter your password here.."
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={createUser}>SignUp</button>
    </div>
  );
};

export default SignUp;
