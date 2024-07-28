import { useState } from "react";
import "./Login.css";
import { adminInfo } from "../../utils/Admin";
import { useNavigate } from "react-router-dom";

import { FaEyeSlash, FaEye } from "react-icons/fa6";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (adminInfo.username === username && adminInfo.password === password) {
      navigate("/admin");
      setPassword("");
      setUsername("");
    } else {
      setError(true);
    }
  };
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h1>Giriş Yap</h1>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-input">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Kullanıcı adı"
            />
          </div>
          <div className="form-input">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Şifre"
            />
            <i
              className="login-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </i>
          </div>
          {error && (
            <span className="form-error">Lütfen kullanıcı adınızı yada parolanızı kontrol ediniz!</span>
          )}
          <button type="submit" className="login-btn">
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
