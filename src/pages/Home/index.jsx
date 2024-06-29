import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pokeball from '../../assets/img/pokeball.svg';
import PokeballBackground from '../../assets/img/pokeball_background.svg';
import Pokedex from '../../assets/img/pokedex_logo.png';
import Search from '../../assets/img/search.png';

import PokemonCard from '../../components/PokemonCard';

const Home = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [filteredPokemonData, setFilteredPokemonData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllPokemon = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1025');
                const pokemonUrls = response.data.results.map(pokemon => pokemon.url);

                const pokemonResponses = await Promise.all(pokemonUrls.map(url => axios.get(url)));
                const allPokemonData = pokemonResponses.map(res => res.data);

                setPokemonData(allPokemonData)
                setFilteredPokemonData(allPokemonData)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data', error)
                setLoading(false)
            }
        };

        fetchAllPokemon();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if(searchTerm.trim() === '') {
            setFilteredPokemonData(pokemonData)
        } else {
            const filterSearch = pokemonData.filter(pokemon =>
                pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                pokemon.id.toString().includes(searchTerm)
            );
            setFilteredPokemonData(filterSearch)
        }
    }

    if (loading) {
        
        return <div className='h-screen w-full '><div className=' h-full flex items-center justify-center my-auto'><img className='animate-spin w-22 h-22' src={Pokeball} alt="" /></div></div>;
    }

    return (
        <div className='relative'>
            <div className='fixed top-0 left-0 flex w-full h-full z-[-1]'>
                <img src={PokeballBackground} alt="Pokeball Background" className='object-cover w-120 h-120'/>
            </div>

            <nav className='shadow-xl h-20 backdrop-blur-md bg-gray-600/15 flex justify-center items-center'>
                <div className=''>
                    <img className='h-14' src={Pokedex} alt="Pokedex" />
                </div>
            </nav>

            <form
                className='flex backdrop-blur-md bg-gray-600/20 rounded-full items-center h-14 mt-16 w-auto mx-15 md:mx-30 sm:mx-12 lg:mx-40 px-6'
                onSubmit={handleSearchSubmit}
            >
                <input
                    placeholder='Nome ou numero do Pokemon'
                    className='outline-none text-lg w-full h-10 sm:mx-0 md:mx-6 lg:mx-6 bg-transparent placeholder-black'
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button className=' mx-4 h-6 w-6' type='submit'><img className='h-6 w-6' src={Search} alt="" /></button>
            </form>

            <div className='w-auto h-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-16  mx-40  gap-16 justify-items-center '>
                {filteredPokemonData.map((pokemon, key) => (
                    <PokemonCard key={key} pokemon={pokemon}/>
                ))}
            </div>
        </div>
    )
}

export default Home;