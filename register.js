import { useState } from "react";
import '../bootstrap/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password Match Check
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Simple password strength validation
    const passwordRegex = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert("Password must be at least 8 characters long and include both letters and numbers.");
      return;
    }

    console.log("Email:", email);
    console.log("Username:", username);
    console.log("Password:", password);
    
    // After successful registration, redirect user to login page
    navigate("/login");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "24rem" }}>
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Input First */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              id="email" 
              type="email" 
              className="form-control form-control-lg" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required 
              autoComplete="off"
            />
          </div>
          
          {/* Username Input Second */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input 
              id="username" 
              type="text" 
              className="form-control form-control-lg" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              required 
              autoComplete="off"
            />
          </div>
          
          {/* Password Field */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
              id="password" 
              type="password" 
              className="form-control form-control-lg" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              required 
              autoComplete="off"
            />
          </div>
          
          {/* Confirm Password Field */}
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input 
              id="confirmPassword" 
              type="password" 
              className="form-control form-control-lg" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)}
              required 
              autoComplete="off"
            />
          </div>
          
          {/* Submit Button */}
          <button type="submit" className="btn btn-primary btn-lg w-100">Register</button>
        </form>
      </div>
    </div>
  );
}