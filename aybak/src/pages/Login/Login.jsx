import { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { useAuth } from "../../utils/auth";
import { supabase } from "../../utils/createClient";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const [adminData, setAdminData] = useState({});

  // Admin bilgilerini Supabase'den çek
  const fetchAdminData = async () => {
    try {
      const { data, error } = await supabase
        .from("admin")
        .select("*")
        .single(); // Tek bir admin kaydını alır
      if (error) throw error;
      setAdminData(data);
    } catch (error) {
      console.error("Admin bilgileri çekilirken bir hata oluştu:", error);
    }
  };

  useEffect(() => {
    fetchAdminData();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (
      username === adminData.username &&
      password === adminData.password
    ) {
      login(); // Kullanıcıyı kimlik doğrulama durumuna ekler
      navigate("/admin");
      setUsername("");
      setPassword("");
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
            <span className="form-error">
              Lütfen kullanıcı adınızı ya da parolanızı kontrol ediniz!
            </span>
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
