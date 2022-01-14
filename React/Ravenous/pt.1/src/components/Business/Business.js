import React from 'react';
import ReactDOM from 'react-dom';
import './Business.css';

let business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
}

export class Business extends React.Component {



    render() {
        return (
            <div className="Business">
                <div className="image-container">
                    <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt='' />
                </div>
                <h2>MarginOtto Pizzeria</h2>
                <div className="Business-information">
                    <div classNameName="Business-address">
                        <p>{business.address}</p>
                        <p>{business.city}</p>
                        <p>{business.state + business.zipCode}</p>
                    </div>
                    <div classNameName="Business-reviews">
                        <h3>{business.category}</h3>
                        <h3 classNameName="rating">{business.rating}</h3>
                        <p>{business.reviewCount} reviews</p>
                    </div>
                </div>
            </div>
        )
    }
}
