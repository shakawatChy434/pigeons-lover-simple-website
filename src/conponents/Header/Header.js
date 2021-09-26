import React, { useEffect, useState } from 'react';


const Hader = () => {
    const [breed, setBreed] = useState([])

    useEffect(() => {
        fetch('./pigeons.JSON')
            .then(res => res.json())
            .then(data => setBreed(data))
    }, [])

    return (
        <div>
            <h1>Hader part is connected.{breed.length} </h1>
        </div>
    );
};

export default Hader;