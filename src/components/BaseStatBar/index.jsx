import React from "react";
import useBaseStatsSearch from "../../hooks/useBaseStatsSearch";

const baseStatBar = (pokemon) => {
    const pokemonStats = useBaseStatsSearch(pokemon)
    console.log(pokemonStats)

    return (
        <div>
            <ul>
                {pokemonStats.map((stat, index) => (
                    <li key={index}>
                        {stat.name} {stat.base_stat}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default baseStatBar