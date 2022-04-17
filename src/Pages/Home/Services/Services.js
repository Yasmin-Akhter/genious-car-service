import React, { useEffect, useState } from 'react';
import Service from '../Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div id="services" className="container">
                <h3 className='text-primary text-center mt-5'> Our Services</h3>
                <div className="services-container">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}

                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;