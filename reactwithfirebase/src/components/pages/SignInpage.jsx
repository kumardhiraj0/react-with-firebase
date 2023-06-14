import React, { useState } from "react";
import { app } from "../../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(app);
const SignInpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((val) => {
        console.log("signIn success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="sign-in">
      <h2>Sign-in page</h2>
      <label htmlFor="email">Enter your Email:</label>
      <input
        type="email"
        id="email"
        placeholder="Enter Email.."
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label htmlFor="pass">Enter your Password:</label>
      <input
        type="password"
        id="pass"
        placeholder="Enter Password.."
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={SignInUser}>Sign-in me to in</button>
    </div>
  );
};

export default SignInpage;
