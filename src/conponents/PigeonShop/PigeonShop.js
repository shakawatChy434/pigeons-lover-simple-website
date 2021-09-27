import React, { useEffect, useState } from 'react';
import AddToCard from '../AddToCard/AddToCard';
import PigeonCard from '../PigeonCard/PigeonCard';
import './PigeonShop.css'

const PigeonShop = () => {
    /* use hook */
    const [breeds, setBreeds] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./pigeons.JSON')
            .then(res => res.json())
            .then(data => setBreeds(data))

    }, [])
    const handlerAddToCart = (breed) => {
        const newCart = [...cart, breed]
        setCart(newCart)
    }
    return (
        <div className="pigeons-container">
            {/* <h3>Pigeons Data is Loaded: {breeds.length} </h3> */}
            <div className="pigeonShop-container">
                {
                    breeds.map(breed => <PigeonCard
                        key={breed.name}
                        breed={breed}
                        handlerAddToCart={handlerAddToCart}
                    ></PigeonCard>)
                }
            </div>
            <div>
                <AddToCard cart={cart}></AddToCard>
            </div>
        </div>
    );
};

export default PigeonShop;