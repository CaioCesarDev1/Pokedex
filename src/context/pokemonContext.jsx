import React, { createContext, useContext, useState } from 'react';

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPokemonId = (id) => {
        return pokemonData.find(pokemon => pokemon.id === parseInt(id));
    }   

    return (
        <PokemonContext.Provider value={{ pokemonData, setPokemonData, loading, setLoading, getPokemonId  }}>
            {children}
        </PokemonContext.Provider>
    );
};

export const usePokemon = () => useContext(PokemonContext);
