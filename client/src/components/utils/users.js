// axios requests for user (client side)

import axios from 'axios'

const User = {
    getAll() {
        axios.get('/users')
        .then(user => {

        })
        .catch(e => console.log(e))
    },
    getOne(id) {
        axios.get(`users/${id}`)
        .then(user => {

        })
        .catch(e => console.log(e))
    },
    postOne(user) {
        axios.post(`users`, user)
        .then(_ => {

        })
        .catch(e => console.log(e))
    },
    putOne(id, user) {
        axios.put(`/users/${id}`, user)
        .then(_ => {

        })
        .catch(e => console.log(e))
    },
    deleteOne(id) {
        axios.delete(`/users/${id}`)
        .then(_ => {

        })
        .catch(e => console.log(e))
    }
}

export default User