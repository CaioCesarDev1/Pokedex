import React, { useState, useEffect } from "react";


const useBaseStatsSearch = (pokemons) => {
    const [pokemonStats, setPokemonStats] = useState([])
    useEffect(() => {
        setPokemonStats(pokemons.pokemon.stats.map(stats => ({
            name: stats.stat.name,
            base_stat: stats.base_stat
        })))
    }, [pokemons])

    return pokemonStats

    
}

export default useBaseStatsSearch