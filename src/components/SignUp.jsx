import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateEmail, validatePhone, validatePassword } from './validators';

function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', contact: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, contact, password } = form;

    if (!name || !email || !contact || !password) {
      setError('All fields are required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Invalid email');
      return;
    }

    if (!validatePhone(contact)) {
      setError('Invalid contact number');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 6 characters');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existing = users.find(user => user.email === email || user.contact === contact);

    if (existing) {
      setError('You are already registered. Please Sign In');
      return;
    }

    users.push(form);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful. Please Sign In.');
    navigate('/signin');
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="text" name="contact" placeholder="Contact Number" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Register</button> <br /><br />
        {error && <span className="error">{error}</span>}
      </form>
    </div>
  );
}

export default SignUp;
