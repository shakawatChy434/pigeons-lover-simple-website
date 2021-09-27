import React from 'react';
import './PigeonCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const PigeonCard = (props) => {
    console.log(props)
    const { name, origin, age, fether, price, img } = props.breed
    return (
        <div className="pigeon-details">
            <div className="pigeon-img">
                <img src={img} alt="" />
            </div>
            <div className="card-information">
                <p>Breed Name :{name} </p>
                <p>Origin :{origin} </p>
                <p>Age :{age} </p>
                <p>Fether :{fether} </p>
                <p>Price : ${price} </p>

                <button onClick={() => props.handlerAddToCart(props.breed)}
                    className="purchase-btn"> <FontAwesomeIcon icon={faShoppingCart} />
                    Add To Cart</button> <br />
            </div>

        </div>

    );
};

export default PigeonCard;