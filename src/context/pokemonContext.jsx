import React, { createContext, useContext, useState } from 'react';

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);

    return (
        <PokemonContext.Provider value={{ pokemonData, setPokemonData, loading, setLoading }}>
            {children}
        </PokemonContext.Provider>
    );
};

export const usePokemon = () => useContext(PokemonContext);
