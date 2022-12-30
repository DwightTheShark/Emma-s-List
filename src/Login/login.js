import React, { Component } from "react";
// import emmalogo from "../../public/emmalogo.jpg";
import "./login.css";

// export default function Login() {
// const { email } = useForm<FormValues>();
// const onSubmit = (e) => {
//   e.preventDefault();
// }

// <form onSubmit={handleSubmit{onSubmit}}>
//     <input {...register("email")} placeholder="Enter your email"/>

//     <input type="submit" />
// </form>
// }




export default class login extends Component {

  constructor (props) {
    super(props);
    this.state={
      email: "",
      password: "",
    };
    this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    fetch("./login.js"), {
      method: "POST",
      crossDomain:true,
      headers: {
        "Content-type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*"
      },
      body: JSON.stringify({
        email,
        password,
      })
    }
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "User")
      })

    if (!e.target.email.value) {
      alert("Email is required");
    } else if (!e.target.email.value) {
      alert("Valid email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else {
      alert("Wrong email or password combination");
    }
  };

  handleClick = e => {
    e.preventDefault();
    alert("Goes to registration page");
  };

  render() {
    return (
      <div className="login">
        <img src="/emmalogo.jpg " className="logo" alt="cute aussie sticking out tongue" />
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="test@test.com"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
            type="password" 
            name="password" 
            placeholder="Password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          </div>
          <button className="primary">Login</button>
        </form>
        <button className="secondary" onClick={this.handleClick}>
          Register
        </button>
      </div>
    );
  }
}

// export default login;


//                                         <form action="/login" method="POST">
//                                           <div>
//                                             <label 
//                                               >Email address</label
//                                             >
//                                             <input
//                                               type="email"
//                                               class="form-control"
//                                               id="exampleInputEmail1"
//                                               aria-describedby="emailHelp"
//                                               name="email"
//                                             />
//                                           </div>
//         <div class="mb-3">
//           <label for="exampleInputPassword1" class="form-label">Password</label>
//           <input
//             type="password"
//             class="form-control"
//             id="exampleInputPassword1"
//             name="password"
//           />
//         </div>
//         <button type="submit" class="btn btn-primary">Submit</button>
//       </form>
//     </section>
//   </div>
// </main>