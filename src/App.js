import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.register = this.register.bind(this)
    this.login = this.login.bind(this)
    this.state = {message: "message"}
  }

  register() {
    let formData = {
      "user_name": document.getElementById("user_name").value,
      "email": document.getElementById("email").value,
      "password": document.getElementById("password").value,
    }

    let formData2 = new FormData()
    formData2.append("user_name", document.getElementById("user_name").value)
    formData2.append("email", document.getElementById("email").value)
    formData2.append("password", document.getElementById("password").value)

    console.log("register")
    console.log(formData)
    fetch('https://laisa.info/ts/register', {
    //fetch('http://localhost:3020/member', {
      mode: "cors",
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        //"Content-typeを指定したらだめ"
        "Content-type": "application/json",
      }
    })
      .then((res) => {return res.text()})
      .then((text) => {this.setState({message:text})})
  }

  login() {
    let formData = {
      "user_name": document.getElementById("user_name").value,
      "email": document.getElementById("email").value,
      "password": document.getElementById("password").value,
    }

    let formData2 = new FormData()
    formData2.append("user_name", document.getElementById("user_name").value)
    formData2.append("email", document.getElementById("email").value)
    formData2.append("password", document.getElementById("password").value)

    console.log("login")
    console.log(formData)
    fetch('https://laisa.info/ts/login', {
    //fetch('http://localhost:3020/member', {
      mode: "cors",
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        //"Content-typeを指定したらだめ"
        "Content-type": "application/json",
      }
    })
      .then((res) => {return res.text()})
      .then((text) => {this.setState({message:text})})
  }

  componentDidMount(){
    fetch('https://laisa.info/ts/', {
      //fetch('http://localhost:3020/member', {
        mode: "cors",
        method: "GET",
      })
        .then((res) => {return res.text()})
        .then((text) => {this.setState({message:text})})
  }

  render(){
    return (
      <div>
      <form>
        user_name：<input type="text" name="user_name" id="user_name" required/><br />
        email：<input type="text" name="email" id="email" required/><br />
        password：<input type="password" name="password" id="password" required/><br />
        <button type="button" onClick={this.register}>新規登録</button>
        <button type="button" onClick={this.login}>ログイン</button>
      </form>
      {this.state.message}
      </div>
    )
  }
}

export default App;
