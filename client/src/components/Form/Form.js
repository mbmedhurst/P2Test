// form for inputting users

import React from 'react'

const Form = ({ handleFormSubmit, handleInputChange, name, email, username, password}) =>

    <form>
        <p>
        <label htmlFor='name'>Name</label>
        <input id='name' type='text' value={name} onChange={handleInputChange}></input>
        </p>
        <p>
        <label htmlFor='email'>Email</label>
        <input id='email' type='text' value={email} onChange={handleInputChange}></input>
        </p>
        <p>
        <label htmlFor='username'>User Name</label>
        <input id='username' type='text' value={username} onChange={handleInputChange}></input>
        </p>
        <p>
        <label htmlFor='password'>Password</label>
        <input id='password' type='text' value={password} onChange={handleInputChange}></input>
        </p>
        <p>
            <button onClick={handleFormSubmit}>Add User</button>
        </p>
    </form>

export default Form