import React, { useEffect, useState } from "react";
import "./AdminInfo.css";
import { supabase } from "../../utils/createClient";

const AdminInfo = () => {
  const [username, setUsername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [adminData, setAdminData] = useState(null); // Boş başlangıç değeri

  // Admin verilerini getir
  const fetchAdminData = async () => {
    try {
      const { data: adminData, error: fetchError } = await supabase
        .from("admin")
        .select("*")
        .single(); // Tek bir kayıt al

      if (fetchError) {
        throw fetchError;
      }

      setAdminData(adminData);
      setUsername(adminData.username);
    } catch (error) {
      setError("Admin verileri alınırken bir hata oluştu: " + error.message);
    }
  };

  useEffect(() => {
    fetchAdminData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Yeni şifreler uyuşmuyor!");
      return;
    }

    if (!adminData) {
      setError("Admin verileri yüklenmemiş.");
      return;
    }

    try {
      // Mevcut şifreyi doğrula
      if (adminData.password !== currentPassword) {
        setError("Mevcut şifre yanlış! Lütfen tekrar deneyiniz.");
        return;
      }

      // Kullanıcı adı ve şifreyi güncelle
      const { error: updateError } = await supabase
        .from("admin")
        .update({ username, password: newPassword }) // Şifreyi hash'lemeyi unutmayın
        .eq("id", adminData.id); // ID ile güncelleme yap

      if (updateError) {
        throw updateError;
      }

      setSuccess("Bilgiler başarıyla güncellendi!");
      setError(""); // Hata mesajını sıfırla
      setNewPassword("")
      setCurrentPassword("")
      setConfirmPassword("")
    } catch (error) {
      setError("Bir hata oluştu: " + error.message);
      setSuccess(""); // Başarı mesajını sıfırla
    }
  };

  return (
    <form className="admin-info-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Kullanıcı Adı</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="current-password">Mevcut Şifre</label>
        <input
          type="password"
          id="current-password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="new-password">Yeni Şifre</label>
        <input
          type="password"
          id="new-password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="confirm-password">Yeni Şifreyi Onaylayın</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>

      {error && <span className="form-error">{error}</span>}
      {success && <span className="form-success">{success}</span>}

      <div className="form-group">
        <button type="submit" className="submit-button">
          Güncelle
        </button>
      </div>
    </form>
  );
};

export default AdminInfo;
