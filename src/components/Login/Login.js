import React, { useState } from "react";

const Login = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = () => {};
  const handleBlur = (e) => {
    let isFromValid = true;

    if (e.target.name === "email") {
      isFromValid = /^\S+@\S+\.\S+$/.test(e.target.value);
    }
    if (e.target.name === "password") {
      isFromValid = /^(?=.{6,12}$)\D*\d/.test(e.target.value);
    }
    if (isFromValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setuser(newUserInfo);
    }
  };
  return (
    <div>
      <h1>Authercation</h1>
     <p>Name {user.name}</p>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          onBlur={handleBlur}
          placeholder=" Your name"
          required
          type="text"
        />
        <br />
        <input
          type="text"
          name="email"
          onBlur={handleBlur}
          placeholder="Your email adders"
          id=""
          required
        />
        <br />
        <input
          type="text"
          name="password"
          onBlur={handleBlur}
          placeholder="Your password"
          id=""
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
