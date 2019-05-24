import React from 'react'

const Form = _ =>

    <form>
        <p>
        <label htmlFor='name'>Name</label>
        <input id='name' type='text'></input>
        </p>
        <p>
        <label htmlFor='email'>Email</label>
        <input id='email' type='text'></input>
        </p>
        <p>
        <label htmlFor='username'>User Name</label>
        <input id='username' type='text'></input>
        </p>
        <p>
        <label htmlFor='password'>Password</label>
        <input id='password' type='text'></input>
        </p>
        <p>
            <button>Add User</button>
        </p>
    </form>

export default Form