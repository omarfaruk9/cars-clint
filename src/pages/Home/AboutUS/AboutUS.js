import React from 'react';
import './AboutUS.css';


const AboutUS = ({ about }) => {
    const { img, name, contact, job } = about;
    return (
        <div>
            <div className="about">
                <img src={img} className="img" alt="" />
                <div className="p-3 text-center">
                    <h3 className="mt-2">{name}</h3>
                    <h4>Proffation: {job}</h4>
                    <h5>Contact: {contact}</h5>
                    <i className="fab fs-3 mx-2 text-light fa-whatsapp"></i>
                    <i className="fab fs-3 mx-2 text-light fa-twitter"></i>
                    <i className="fab fs-3 mx-2 text-light fa-facebook-f"></i>
                </div>
            </div>
        </div>
    );
};

export default AboutUS;