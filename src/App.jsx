import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SignUp } from './SignUp'
import { UserList } from './UserList'

function App() {
  const [users, setUsers] = useState([
    { id: 101, name: 'Artash', surname: 'James', login: 'artash.james@gmail.com', password: 'password123' },
    { id: 102, name: 'Gago', surname: 'Smith', login: 'gago.smith@gmail.com', password: 'password321' },
  ])

  const addUser = (newUser) => {
    setUsers([...users, newUser])
  }

  return (
    <div className='row'>
      <SignUp
        users={users} onAdd={addUser}
      />

      <UserList
          users={users}
      />
    </div>
  )
}

export default App;