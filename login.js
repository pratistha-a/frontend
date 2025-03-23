import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import '../bootstrap/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please enter both username and password");
      return;
    }
    console.log("Username:", username);
    console.log("Password:", password);
    // Redirect or authenticate user
  };

  return (
    <div>
      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            MyApp
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                Home
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/register")} style={{ cursor: "pointer" }}>
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Login Form */}
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card shadow p-4" style={{ width: "24rem" }}>
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input 
                id="username" 
                type="text" 
                className="form-control form-control-lg" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                required 
              />
            </div>
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
            <button type="submit" className="btn btn-primary btn-lg w-100">Login</button>
          </form>
          <p className="text-center mt-3">
            Don't have an account?{" "}
            <span className="text-primary" style={{ cursor: "pointer" }} onClick={() => navigate("/register")}>
              Register here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

