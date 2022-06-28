import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
        email: '',
        pass: ''
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit=(e)=>{
        debugger;
        e.preventDefault();
        var bool = false;
        var alllist = JSON.parse(localStorage.getItem('list'));
        for( let i=0; i<alllist.length;i++){
     if(this.state.email === alllist[i].email && this.state.pass === alllist[i].pass){
        bool=true;
     }
       
    }
    if(bool === true){
       alert("Access Granted")
    }
    else{
        alert("Access Denied")
    }
}

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" value={this.state.email} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.handleChange} />             
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" value={this.state.pass} name="pass" className="form-control" id="exampleInputPassword1" onChange={this.handleChange} />
                    </div>                   
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
