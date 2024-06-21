export const UserList = ({ users }) => {

    const hadlePasswordSafety = password => {
        return '*'.repeat(password.length);
    }

    const viewPassword =()=>{}
    return <div>
        <h2>User List</h2>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Login</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {users.map(elm => <tr key={elm.id}>
                    <td>{elm.id}</td>
                    <td>{elm.name}</td>
                    <td>{elm.surname}</td>
                    <td>{elm.login}</td>
                    <td>
                        {hadlePasswordSafety(elm.password)}
                    </td>
                </tr>)}
            </tbody>
        </table>
    </div>

}