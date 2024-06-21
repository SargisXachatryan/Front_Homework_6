import React, { useState } from 'react';

export const SignUp = ({ users, onAdd }) => {
    const [user, setUser] = useState({ id: '', name: '', surname: '', login: '', password: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setUser({ ...user, [id]: value });
        setError('');
        setSuccess('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation checks
        if (!user.id.trim() || !user.name.trim() || !user.surname.trim() || !user.login.trim() || !user.password.trim()) {
            return setError('All fields must be filled');
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        if (!emailPattern.test(user.login)) {
            return setError('Login must be a valid email');
        }

        if (users.some(existingUser => existingUser.login === user.login)) {
            return setError('Login is already taken');
        }

        if (user.password.length < 8) {
            return setError('Password should be at least 8 characters long');
        }

        // If all validations pass
        onAdd(user);
        setUser({ id: '', name: '', surname: '', login: '', password: '' });
        setSuccess('User registered successfully');
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
                <label htmlFor="id">ID</label>
                <input type="text" id="id" value={user.id} onChange={handleChange} />

                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={user.name} onChange={handleChange} />

                <label htmlFor="surname">Surname</label>
                <input type="text" id="surname" value={user.surname} onChange={handleChange} />

                <label htmlFor="login">Login (Email)</label>
                <input type="email" id="login" value={user.login} onChange={handleChange} />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={user.password} onChange={handleChange} />

                <button type="submit">Sign Up</button>
            </form>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {success && <div style={{ color: 'green' }}>{success}</div>}
        </div>
    );
};

