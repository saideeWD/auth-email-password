import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>Authercation</h1>
          <form>
                <input type="text" name=""  placeholder='email' id="" required /><br/>
                <input type="text" name=""  placeholder='password' id="" required /><br/>
                <input type="submit" value="Submit"  />
                </form>
        </div>
    );
};

export default Login;