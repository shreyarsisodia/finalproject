import form from 'react-bootstrap/form';
import {useEffect,useState} from 'react';
import {connect} from "react-redux";
import {React,Component} from 'react';
import {register} from '../../store/actions/auth1';
class Register extends Component{
    constructor(props)
    {
        super(props);
         this.onChangeValue=this.onChangeValue.bind(this);
        this.SubmitButton=this.SubmitButton.bind(this);
        this.state={
            email:"",
            username:"",
            password:"",
            successful:false,
        };
    }
    onChangeValue(e)
    {
        this.setState({[e.target.id]:e.target.value});
    };
    SubmitButton(e)
    {
        e.preventDefault();
        console.log("dispatchstarted");
        this.props.dispatch(register(this.state.email,this.state.username,this.state.password))
       .then(() => {
          this.setState({
            successful: true,
          });
        })
        .catch(() => {
          this.setState({
            successful: false,
          });
        });
        
    };
    render(){
        return(<div className="container">
    {!this.state.successful&&
    <form>
   <h1>Sign Up</h1>
  <div class="form-group container">
  <label for="email">Email address</label>
  <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.onChangeValue}/>     
  <label for="username">Username</label>
  <input type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter Name" onChange={this.onChangeValue}/>
  <label for="Password">Password</label>
  <input type="password" class="form-control" id="password" placeholder="Password" onChange={this.onChangeValue}/>
         
  <button type="submit" class="btn btn-primary mt-4" onClick={this.SubmitButton}>Submit</button>
           </div>
</form>
               }
{this.state.successful&&<h1>Registration Successful</h1>}
</div>);
    }
};
export default connect()(Register);