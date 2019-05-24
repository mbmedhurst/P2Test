// template for displaying list of users

import React from 'react'

const List = ({user}) =>
<ul>
  {
      user.map(({name, email, username, password}) => (
          <li>
              <p>{name}</p>
              <p>{email}</p>
              <p>{username}</p>
              <p>{password}</p>
          </li>
      ))
  }
</ul>

export default List