import { useEffect, useState } from "react";
import axiosInstance from "../helper/axios_instance";

const useFetchPokemonSpecies = (id) => {
    const [speciesData, setSpeciesData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemonSpecies = async () => {
            try {
                const response = await axiosInstance.get(`pokemon-species/${id}/`);
                setSpeciesData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching species data', error);
                setLoading(false);
            }
        };

        if (id) {
            fetchPokemonSpecies();
        }
    }, [id]);

    return {speciesData, loading};
}

export default useFetchPokemonSpecies;