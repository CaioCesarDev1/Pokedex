import axios from 'axios';
import { useEffect } from "react";
import { usePokemon } from '../context/pokemonContext';
import axiosInstance from '../helper/axios_instance';

const useFetchPokemon = () => {
    const { pokemonData, setPokemonData, loading, setLoading } = usePokemon();

    useEffect(() => {
        const fetchAllPokemon = async () => {
            try {
                const response = await axiosInstance.get("pokemon?limit=1025");
                const pokemonUrls = response.data.results.map(pokemon => pokemon.url);

                const pokemonResponses = await Promise.all(pokemonUrls.map(url => axios.get(url)));
                const allPokemonData = pokemonResponses.map(res => res.data);

                setPokemonData(allPokemonData)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data', error)
                setLoading(false)
            }
        };

        fetchAllPokemon();
    }, []);

    return { pokemonData, loading };
}

export default useFetchPokemon