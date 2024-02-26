import React, { useState } from "react";
import firebase from "firebase/compat/app";
import { firebaseConfig } from "./Singup/firebase.config";
import "firebase/compat/auth";
firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
    success:''
  });

  const handleSubmit = (e) => {
    if (user.email && user.password && user.name) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          // Signed in
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setuser(newUserInfo)
          // var user = userCredential.user;
        
          // console.log(user);
          // ...
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setuser(newUserInfo);
          // ..
        });
    }

    e.preventDefault();
  };
  const handleBlur = (e) => {
    let isFieldValid = true;

    if (e.target.name === "email") {
      isFieldValid = /^\S+@\S+\.\S+$/.test(e.target.value);
    }
    if (e.target.name === "password") {
      isFieldValid = /^(?=.{6,12}$)\D*\d/.test(e.target.value);
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setuser(newUserInfo);
    }
  };
  return (
    <div className="sing-up">
      <h1>Authercation</h1>
      <p>Name :{user.name}</p>
      <p>Email : {user.email}</p>
      <p>Password : {user.password}</p>
      <div className="sing">
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
      <p style={{ color: "red" }}>{user.error}</p>

      {
        user.success && <p style={{ color: "red" }}>{user.success} User create success full</p>
      }
    </div>
  );
};

export default Login;
