import React, { Component } from 'react';
export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            pass: '',
            alllist: []
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    componentDidMount() {
        let data = JSON.parse(localStorage.getItem('list'));
        this.setState({ alllist: data });        
    }
    Edit(e){
        let answer = localStorage.key(1);
        var list = { name: e.target.name.value, email: e.target.email.value, phone: e.target.phone.value, pass: e.target.pass.value }
        localStorage.setItem("list", JSON.stringify(alllist))
    }
    onSubmit(e) {
        e.preventDefault();
        if (localStorage.length > 0) {
            var alllist = JSON.parse(localStorage.getItem('list'));
        }  else {
            alllist = [];
        }     
        var list = { name: e.target.name.value, email: e.target.email.value, phone: e.target.phone.value, pass: e.target.pass.value }
        alllist.push(list);
        localStorage.setItem("list", JSON.stringify(alllist))
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" value={this.state.name} name="name" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" value={this.state.email} name="email" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Role</label>
                        <input type="tel" className="form-control" value={this.state.phone} name="phone" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" value={this.state.pass} name="pass" onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block my-2">Submit</button>
                </form>
                <div className='my-5'>
                    <div className='row'>
                        <h3 className='col-md-3'>Name</h3>
                        <h3 className='col-md-3'>Email</h3>
                        <h3 className='col-md-2'>Role</h3>
                        <h3 className='col-md-2'>Password</h3>
                        <h3 className='col-md-2'>Edit</h3>
                    </div>
                    {this.state.alllist.map(item => (
                        <div className='row'>
                            <p className='col-md-3'>{item.name}</p>
                            <p className='col-md-3'>{item.email}</p>
                            <p className='col-md-2'>{item.phone}</p>
                            <p className='col-md-2'>{item.pass}</p>
                            <button className=' btn btn-success col-md-2' onClick={this.Edit}>Edit</button>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}