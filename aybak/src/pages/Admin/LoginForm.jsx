import { useState } from 'react';
// import './LoginForm.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Burada giriş işlemi yapılabilir, örneğin bir API çağrısı
        console.log('Kullanıcı Adı:', username);
        console.log('Şifre:', password);
    };
    return (

        <div style={{ maxWidth: '300px', margin: '80px auto', padding: '1rem', border: '1px solid #ccc', borderRadius: '4px' }}>
            <h2>Giriş Yap</h2>
            <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Kullanıcı Adı:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }}
                />
            </div>
            <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Şifre:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }}
                />
            </div>
            <button onClick={handleLogin} style={{ width: '100%', padding: '0.5rem', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px' }}>
                Giriş Yap
            </button>
        </div>
    );
}


export default LoginForm;