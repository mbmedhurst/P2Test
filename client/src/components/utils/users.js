import axios from 'axios'

const User = {
    getAll() {
        axios.get('/user')
        .then(user => {

        })
        .catch(e => console.log(e))
    },
    getOne(id) {
        axios.get(`user/${id}`)
        .then(user => {

        })
        .catch(e => console.log(e))
    },
    postOne(user) {
        axios.post(`user`, user)
        .then(_ => {

        })
        .catch(e => console.log(e))
    },
    putOne(id, user) {
        axios.put(`/user/${id}`, user)
        .then(_ => {

        })
        .catch(e => console.log(e))
    },
    deleteOne(id) {
        axios.delete(`/user/${id}`)
        .then(_ => {

        })
        .catch(e => console.log(e))
    }
}

export default User