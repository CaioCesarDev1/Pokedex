import React from "react";
import { useParams } from 'react-router-dom';
import Pokeball from '../../assets/img/pokeball.svg';
import PokeballBackground from '../../assets/img/pokeball_background.svg';
import NaviBar from '../../components/NaviBar';
import Type from "../../components/Type";
import Weakness from "../../components/Weakness";
import { CapitalizeFirstLetter, FormatId, FormatNumber } from '../../helper/helper';

import BaseStatBar from "../../components/BaseStatBar";
import { usePokemon } from '../../context/pokemonContext';
import useFetchPokemonSpecies from "../../hooks/useFetchPokemonSpecies";

const Summary = () => {
    const { id } = useParams();
    const { getPokemonId, loading } = usePokemon();
    const { speciesData, loading: speciesLoading } = useFetchPokemonSpecies(id);

    const pokemon = getPokemonId(id);


    if (!pokemon || speciesLoading || loading) {
        return <div className='h-screen w-full '><div className=' h-full flex items-center justify-center my-auto'><img className='animate-spin w-22 h-22' src={Pokeball} alt="" /></div></div>;
    }

    const pokemonTypes = pokemon.types.map(t => t.type.name)
    const abilitiesList = pokemon.abilities || [];
    const description = speciesData?.flavor_text_entries?.find(entry => entry.language.name === 'en');

    return (
        // fundo e  navbar
        <div className="relative h-screen w-screen overflow-hidden">

            <div className='fixed top-0 left-0 flex w-full h-full z-[-1]'>
                <img src={PokeballBackground} alt="Pokeball Background" className='object-cover w-120 h-120' />
            </div>

            <NaviBar />

            <div className="flex  flex-row h-full w-full ">
                {/* imagem descrição  */}
                <div className="flex flex-col mt-10 mx-10 max-w-96 h-96">
                    <div className="backdrop-blur-md bg-gray-600/20 rounded-lg">
                        <img className="h-96" src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.species.name} />
                    </div>
                    <div className=" mt-12 font-semibold ">
                        <p className="mb-2 text-3xl">Descrição</p>
                        <p className="text-lg">{description ? description.flavor_text : 'Descrição não disponível'}</p>
                    </div>

                </div>
                <div className="flex flex-col h-screen w-screen mr-10 ">
                    <div className="flex flex-row w-full gap-4 my-10">
                        {/* informações gerais */}
                        <div className="flex flex-col w-1/2">
                            <div className="flex flex-row">
                                <div className="flex flex-col">
                                    <p>#{FormatId(pokemon.id)}</p>
                                    <p>{CapitalizeFirstLetter(pokemon.species.name)}</p>
                                </div>
                                <div className="flex flex-col">
                                    <p>Altura</p>
                                    <p>{FormatNumber(pokemon.height)}m</p>
                                </div>
                                <div className="flex flex-col">
                                    <p>Peso</p>
                                    <p>{FormatNumber(pokemon.weight)}kg</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p>Habilidades</p>
                                <div className="flex flex-row">
                                    {abilitiesList.map((numberAbility, key) => (
                                        <p key={key}>{CapitalizeFirstLetter(numberAbility.ability.name)}</p>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p>Tipo</p>
                                <div className="flex flex-row gap-4 ">
                                    {pokemonTypes.map((type, key) => (
                                        <Type key={key} type={type} />
                                    ))}
                                </div>
                            </div> 
                            <div className="flex flex-col">
                                <p>Fraquezas</p>
                                <Weakness types={pokemonTypes} />
                            </div>
                        </div>
                        {/* status */}
                        <div className="w-1/2 ">
                            <p>Status Base</p>
                            <BaseStatBar pokemon={pokemon}/>
                        </div>
                    </div>
                    {/* evoluções */}
                    <div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Summary