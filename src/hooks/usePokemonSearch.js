import { useEffect, useState } from "react";

const usePokemonSearch = (pokemonData) => {
    const [filteredPokemonData, setFilteredPokemonData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setFilteredPokemonData(pokemonData);
    }, [pokemonData]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchTerm.trim() === '') {
            setFilteredPokemonData(pokemonData);
        } else {
            const filterSearch = pokemonData.filter(pokemon =>
                pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                pokemon.id.toString().includes(searchTerm)
            );
            setFilteredPokemonData(filterSearch);
        }
    };

    return { searchTerm, handleSearchChange, handleSearchSubmit, filteredPokemonData };
};

export default usePokemonSearch;
