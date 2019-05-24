// axios requests for user (client side)

import axios from 'axios'

const User = {
    getAll: _ => axios.get('/users'),    
    getOne: id => axios.get(`/users/${id}`),
    postOne: user => axios.post(`/users`, user),
    putOne: (id, user) => axios.put(`/users/${id}`, user),
    deleteOne: id => axios.delete(`/users/${id}`),
}

export default User