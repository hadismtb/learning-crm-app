import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupHandler = async (event) => {};

  return (
    <div style={{ color: "white" }}>
      <h3>Signup Form</h3>

      <div>
        <input
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={signupHandler}>Sign Up</button>
    </div>
  );
}

export default Signup;
