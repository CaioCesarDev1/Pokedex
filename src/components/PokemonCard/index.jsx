import React from 'react';
import { CapitalizeFirstLetter, FormatId } from '../../helper/helper';
import useCustomNavigate from '../../hooks/useCustomNavigate';
import Type from '../Type';

const PokemonCard = ({pokemon}) => {
    const pokemonTypes = pokemon.types;
    const handleNavigate = useCustomNavigate();

    const handleCardClick = () => {
        handleNavigate('summary', pokemon.id);
    };

    return (
        <div onClick={handleCardClick} className='cursor-pointer h-80 w-80 animate-fade-in transition ease-in-out delay-50 duration-500 hover:backdrop-blur-sm hover:bg-slate-800/25 flex flex-col backdrop-blur-md bg-gray-600/20 rounded-lg m-0 p-0'>
            <p className="m-0 p-0 mx-10 mt-5 font-bold size-4 text-sm">#{FormatId(pokemon.id)}</p>
            <p className="m-0 p-0 mx-10 font-bold text-lg">{CapitalizeFirstLetter(pokemon.species.name)}</p>
            <div className='flex  justify-center mt-6'>
            <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.species.name} className="h-40 w-40 m-0 p-0"/>
            </div>
            <div className="m-0 p-0">
                <div className="m-0 p-0 w-auto  flex flex-row justify-between mx-10 mt-4 gap-4">
                    {pokemonTypes.map((types, key) => (
                        <Type key={key} type={types.type.name}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PokemonCard;