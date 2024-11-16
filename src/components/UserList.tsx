import { User } from '../interface/User'

const UserList = () => {
    const human: User = {
        name: 'John Doe',
        age: 30,
    }
    
  return (
    <>
        <h2>User List</h2>
        <p>Name: {human.name}</p>
        <p>Age: {human.age}</p>
    </>
  )
}

export default UserList
