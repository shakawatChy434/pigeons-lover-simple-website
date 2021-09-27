import React from 'react';
import './AddToCard.css'
const AddToCard = (props) => {
    const { cart } = props
    let totalQuantity = 0;
    let totalPrice = 0;
    let addName = [];
    for (const breed of cart) {
        if (!breed.quantity) {
            breed.quantity = 1
        }
        totalQuantity = totalQuantity + breed.quantity
        totalPrice = totalPrice + breed.quantity * breed.price;
        addName.push(breed.name, <br />)
    }
    return (
        <div className="card-details">
            <h5> Total Pigeon:  {totalQuantity} </h5>
            <h5> Total Price : ${totalPrice} </h5>
            <h4>Total Pigeons Slected : </h4>
            <h5> {addName} </h5>

        </div>
    );
};

export default AddToCard;