import React, { Component } from 'react'
import Form from '../../components/Form'
import List from '../../components/List'
import User from '../../components/utils/users.js'

class Home extends Component {
    state = {
        name: '',
        email: '',
        username: '',
        password: '',
        user: []
    }

    handleInputChange = event => {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleFormSubmit = event => {
        event.preventDefault()
        let user = this.state.user
        user.push({
            name: this.state.name,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        })
        this.setState({ user })
    }

    render() {
        return (
            <>
                <h1>Hello World!</h1>
                <Form
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    name={this.state.name}
                    email={this.state.email}
                    username={this.state.username}
                    password={this.state.password}
                />
                <List
                    user={this.state.user}
                />
            </>
        )
    }
}

export default Home