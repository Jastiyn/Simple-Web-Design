import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/nubdexchange_logo.png';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        alert(`Logged in as ${email}`);
        navigate('/profile', {
            state: { name: email, email: email },
        });
    };

    return (
        <div className="form-container">
            <img src={logo} alt="Brand Logo" style={{ width: '120px' }} />
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <FaEnvelope className="icon" />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <FaLock className="icon" />
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                <button type="submit">Login</button>
            </form>
            <p className="form-footer">
                Don’t have an account yet? <a href="/signup">Sign up here</a>.
            </p>
        </div>
    );
};

export default Login;