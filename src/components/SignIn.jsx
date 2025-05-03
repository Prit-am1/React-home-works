import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      setError('Invalid email or password');
    } else {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/blogs');
    }
  };

  return (
    <div className="form-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Sign In</button> <br /><br />
        {error && <span className="error">{error}</span>}
      </form>
    </div>
  );
}

export default SignIn;
