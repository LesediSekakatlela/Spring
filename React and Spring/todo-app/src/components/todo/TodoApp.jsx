import React, {Component} from 'react';

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <LoginComponent/>
            </div>
        )
    }
}

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'in28min',
            password: ''
        }

        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        console.log(this.state);
        this.setState(
            {
                [event.target.name]
                :event.target.name
            }
        )
    }

    // handleUsernameChange(event) {
    //     console.log(event.target.value);
    //     this.setState({username:event.target.value})
    // }

    // handlePasswordChange(event) {
    //     console.log(event.target.value);
    //     this.setState({password:event.target.value})
    // }

    render() {
        return (
            <div>
             User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
             Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
             <button>Login</button>
            </div>
        )
    }
}

export default TodoApp;