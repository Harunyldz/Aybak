import React from 'react';
import data from '../../utils/Products.js';

const BakliyatSaglik = () => {
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.text}</p>
            <h2>Yararları:</h2>
            <ul>
                {data.items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h2>Nohutun Yararları:</h2>
            <ul>
                {data.nohutYararlari.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h2>Kırmızı Mercimeğin Yararları:</h2>
            <ul>
                {data.kirmiziMercimekYararlari.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h2>Sarı Mercimeğin Yararları:</h2>
            <ul>
                {data.sariMercimekYararlari.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default BakliyatSaglik;
