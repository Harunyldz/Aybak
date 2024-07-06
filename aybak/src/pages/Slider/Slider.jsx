import React from 'react'
import './Slider.css'
import aybk from "../../assets/1.jpg";
import oden1 from "../../assets/2.jpg";
import odenay from "../../assets/3.jpg";

function Slider() {
    return (
        <div className='slider-box'>
            <div className='slider-ref'>
                <div className='slider-1'><img className='slider-img' src={aybk} /></div>
                <div className='slider-1'><img className='slider-img' src={oden1} /></div>
                <div className='slider-1'><img className='slider-img' src={odenay} /></div>
            </div>
            <div className="header-top">
                <h2>Her Tanede Kalite, Her Sofrada Lezzet</h2>
                <p>
                    1984 yılından beri tarım sektöründe öncü olan Öden Gıda San. Tic.
                    Ltd. Şti., kaliteyi her zaman en ön planda tutarak sofralarınıza
                    lezzet katıyor. İlk günden bu yana doğallık ve güvenilirlik
                    ilkesinden ödün vermeden üretim yapan firmamız, 1994 yılında Aybak
                    Gıda San. Tic. Ltd. Şti. olarak genişleyen ürün yelpazesiyle
                    pirincin yanı sıra çeşitli bakliyat ürünlerini de sunmaya başladı.
                    Tarladan sofranıza kadar uzanan bu yolculukta, her bir ürünümüzde
                    aynı özen ve kaliteyi bulacaksınız.
                </p>
            </div>
        </div>
    )
}

export default Slider