import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);

    }
    return (
        <div>
            <div className="service">
                <img className='w-100  rounded-top-3' src={img} alt="" />
                <h4>{name} </h4>
                <p><small>{description}</small></p>
                <button onClick={() => navigateToServiceDetail(id)} className=' bg-primary text-white border-0'>Book:{name}</button>
            </div>
        </div>
    );
};

export default Service;