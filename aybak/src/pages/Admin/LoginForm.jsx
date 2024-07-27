import { useState } from 'react';
import './Loginform.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Burada giriş işlemi yapılabilir, örneğin bir API çağrısı
        console.log('Kullanıcı Adı:', username);
        console.log('Şifre:', password);
    };
    return (

        <div className='adminMain'>
            <h2>Giriş Yap</h2>
            <div className='adminForm'>
                <label className='adminLabel' >Kullanıcı Adı:</label>
                <input className='adminInput'
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}

                />
            </div>
            <div className='adminForm'>
                <label className='adminLabel' >Şifre:</label>
                <input className='adminInput'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

                />
            </div>
            <button className='adminBtn' onClick={handleLogin}>
                Giriş Yap
            </button>
        </div>
    );
}


export default LoginForm;