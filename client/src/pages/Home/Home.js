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

    componentWillMount () {
        User.getAll()
        .then(({data}) => {
            this.setState({user: data})
        })
    }

    handleInputChange = event => {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleFormSubmit = event => {
        event.preventDefault()
        let user = {
            name: this.state.name,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        }
        let users = this.state.user
        User.postOne(user)
        user.push(user)
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