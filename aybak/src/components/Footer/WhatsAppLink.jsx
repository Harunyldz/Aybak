import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppLink = ({ phoneNumber, message }) => {
    const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className='whatsapp'><FaWhatsapp /><p>WhatsApp</p></div>
        </a>
    );
};

export default WhatsAppLink;