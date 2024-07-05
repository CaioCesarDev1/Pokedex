import React from 'react';
import Pokeball from '../../assets/img/pokeball.svg';
import PokeballBackground from '../../assets/img/pokeball_background.svg';
import Search from '../../assets/img/search.png';
import NaviBar from '../../components/NaviBar';

import useFetchPokemon from '../../hooks/useFetchPokemon';
import usePokemonSearch from '../../hooks/usePokemonSearch';

import PokemonCard from '../../components/PokemonCard';

const Home = () => {
    const { pokemonData, loading } = useFetchPokemon();
    const { searchTerm, handleSearchChange, handleSearchSubmit, filteredPokemonData } = usePokemonSearch(pokemonData);

    if (loading) {
        return <div className='h-screen w-full '><div className=' h-full flex items-center justify-center my-auto'><img className='animate-spin w-22 h-22' src={Pokeball} alt="" /></div></div>;
    }

    return (
        <div className='relative'>
            <div className='fixed top-0 left-0 flex w-full h-full z-[-1]'>
                <img src={PokeballBackground} alt="Pokeball Background" className='object-cover w-120 h-120' />
            </div>

            <NaviBar/>

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

            <div className='w-auto h-auto flex flex-row justify-center flex-wrap  mt-16  mx-40  gap-8 '>
                {filteredPokemonData.map((pokemon, key) => (
                    <PokemonCard key={key} pokemon={pokemon} />
                ))}
            </div>
        </div>
    )
}

export default Home;