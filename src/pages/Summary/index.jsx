import React from "react";
import { useParams } from 'react-router-dom';

const Summary = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Bem vindo ao Sumario do Pokemon {id}</h1>
        </div>
    );
};

export default Summary