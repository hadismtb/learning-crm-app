import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const signupHandler = async (event) => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (data.status === "success") {
      return router.push("/login");
    }
  };

  useEffect(() => {
    fetch("/api/user")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          window.location.href = "/";
        }
      });
  }, []);

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
