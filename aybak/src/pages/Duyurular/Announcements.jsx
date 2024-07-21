import React, { useEffect, useRef, useState } from 'react';
import './Announcements.css'; // CSS dosyasını içeri aktarıyoruz



const App = () => {
    const items = [
        '02.10.2021 - ŞİRKETİMİZ 04.10.2021 PAZARTESİ TARİHİNDEN İTİBAREN RAMİ KURU GIDA SİTESİNDEDEKİ FALİYETLERİNE SON VERİP ŞUBEMİZ OLARAK FAALİYET GÖSTEREN MEGA CANTER A BLOK NO:235-236-237-238 BAYRAMPAŞA ADRESİNDE SİZ DEĞERLİ TEDARİKÇİ VE MÜŞTERİLERİMİZE HİZMET VERMEYE DEVAM EDECEKTİR. SAYGILAR..',
        '-----------------------------------',
        'İkinci Madde',
        '-----------------------------------',
        'Üçüncü Madde',
        '-----------------------------------',
        'Dördüncü Madde',
        '-----------------------------------',
        'Beşinci Madde',
        '-----------------------------------',
        'Altıncı Madde',
        '-----------------------------------',

    ];

    return (
        <div className="App">
            <div className="marquee-container">
                <div className="marquee">
                    <ul>
                        {items.map((item, index) => (
                            <li key={index} className="list-item">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default App;
