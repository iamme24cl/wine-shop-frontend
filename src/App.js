import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/login_status')
      .then(res => console.log(res.data));
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:3000/users', {
      user: {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))

    this.setState({
      name: "",
      email: "",
      password: ""
    })
  }



  render () {
    return (
      <div className="container mt-5">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} className="form-control"/>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="text" placeholder="example@mail.com" value={this.state.email} name="email" onChange={this.handleChange} className="form-control"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="password" value={this.state.password} name="password" onChange={this.handleChange} className="form-control"/>
          </div>

          <div className="form-group">
            <input type="submit" className="btn btn-dark"/>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
