import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/nubdexchange_logo.png';
import { FaUser, FaEnvelope, FaLock, FaUniversity, FaEye, FaEyeSlash } from 'react-icons/fa';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [branch, setBranch] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const fullName = `${firstName} ${lastName}`;
        alert(`Account created for ${fullName}`);
        navigate('/profile', {
            state: {
                name: fullName,
                email: email,
                branch: branch,
            },
        });
    };

    return (
        <div className="form-container">
            <img src={logo} alt="Brand Logo" style={{ width: '120px' }} />
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="input-group">
                        <FaUser className="icon" />
                        <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <FaUser className="icon" />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                            required
                        />
                    </div>
                </div>
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
                    <FaUniversity className="icon" />
                    <select value={branch} onChange={e => setBranch(e.target.value)} required>
                        <option value="">Select Branch</option>
                        <option value="Main Campus">NU - Manila</option>
                        <option value="Laguna">NU - Laguna</option>
                        <option value="Clark">NU - Clark</option>
                        <option value="MOA">NU - MOA</option>
                    </select>
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
                <button type="submit">Sign Up</button>
            </form>
            <p className="form-footer">
                Already have an account? <a href="/login">Login here</a>.
            </p>
        </div>
    );
};

export default Signup;