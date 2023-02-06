import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';

const Login = (props) => {

    const [credentials, setCredentials] = useState({email: "", password: ""});
    let history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
          });

          const json = await response.json();
          console.log(json);

          if(json.success===true)
          {
                localStorage.setItem('token', json.authtoken);
                props.showAlert("Logged in Successfully", 'success');
                history.push('/');
                
          }
          else
          {
              props.showAlert("Invalid Credentials", 'danger');
          }
    }

    const onChange = (event) => {

        setCredentials({ ...credentials, [event.target.name]: event.target.value });
      }
    


    return (
    <>

    {/* <div style={{marginBottom:'9.15rem'}} class="container-fluid form-design">
            <h2 style={{fontWeight:'700'}} className='my-3'>Login</h2>
            <hr style={{width:'10%',margin:'auto', display:'absolute'}}></hr>
            <p style={{marginTop:'2rem', fontWeight:'400',marginBottom:'2rem'}}>Welcome back! Login to access your notes.</p>
            <form className="my-5" onSubmit={handleSubmit}>
                <div className="mb-1 input-divs">
                <input type="email" onChange={onChange} className="form-control input-tag" value={credentials.email}id="email" name="email" placeholder='Email address'/><br/>
                </div>
                <div className='mb-1 input-divs'>
                <input type="password"  onChange={onChange} className="form-control input-tag" value={credentials.password} id="password" name="password" placeholder='Password'/><br/>
                </div>
                <div className='mb-1 input-divs'>
                <button style={{marginTop:'1rem'}} type="submit" className="btn btn-primary btn-use">Continue</button>
                </div>
            </form>
        </div> */}


            <div class="background shapes">
                    <div class="shape"></div>
                    <div class="shape"></div>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    <h3>Login Here</h3>

                    <label for="username">Email </label>
                    {/* <input type="text" placeholder="Email or Phone" id="username"/> */}
                    <input type="email" onChange={onChange} value={credentials.email} id="username" name="email" placeholder='Email address'/>

                    <label for="password">Password</label>
                    {/* <input type="password" placeholder="Password" id="password"/> */}
                    <input type="password" onChange={onChange} value={credentials.password} id="password" name="password" placeholder='Password'/>

                    <button type="submit">Log In</button>
                </form>

           
    </>
    )
}

export default Login