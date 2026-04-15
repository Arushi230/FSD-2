import { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <label>Email</label>
      <input
        aria-label="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Password</label>
      <input
        aria-label="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default Form;