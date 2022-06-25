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
    onEdit = (name,email,phone,pass) => {       
        console.log(name,email,phone,pass);
        this.setState( {
        name: name,
        email: email,
        phone: phone,
        pass: pass})

    }
    onDelete=(email)=> {
        localStorage.removeItem(email);


        // Storing key present at 0th index
        // var key = localStorage.key(0);         
        // Removing key at 0th index
        // localStorage.removeItem(key);
    }
    onSubmit(e) {
        e.preventDefault();
        if (localStorage.length > 0) {
            var alllist = JSON.parse(localStorage.getItem('list'));
        } else {
            alllist = [];
        }
        var list = { name: e.target.name.value, email: e.target.email.value, phone: e.target.phone.value, pass: e.target.pass.value }
        alllist.push(list);
        localStorage.setItem("list", JSON.stringify(alllist));
    }
    render() {
        return (<>
                <div className="container">
                <h2>Enter The Details Here </h2>
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
                <h2 className='my-3'>Details Table</h2>
                <table className='table'>
                    <thead>
                        <tr className='table-info'>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Password</th>
                            <th> Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {this.state.alllist.map(item => (
                        <tbody>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td >{item.phone}</td>
                                <td >{item.pass}</td>
                                <td><button className='btn btn-success ' onClick={() => this.onEdit(item.name,item.email,item.phone,item.pass)} >Edit</button></td>
                                <td><button className='btn btn-danger' onClick={() => this.onDelete(item.email)}>Delete</button> </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
            </>
        )
    }
}