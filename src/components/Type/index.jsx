import React from 'react';
import { CapitalizeFirstLetter } from '../../helper/helper';

const typeColors = {
    grass: 'bg-[var(--color-grass)]',
    fire: 'bg-[var(--color-fire)]',
    water: 'bg-[var(--color-water)]',
    bug: 'bg-[var(--color-bug)]',
    normal: 'bg-[var(--color-normal)]',
	steel: 'bg-[var(--color-steel)]',
	psychic: 'bg-[var(--color-psychic)]',
	ground: 'bg-[var(--color-ground)]',
	ice: 'bg-[var(--color-ice)]',
	flying: 'bg-[var(--color-flying)]',
	ghost: 'bg-[var(--color-ghost)]',
	poison: 'bg-[var(--color-poison)]',
	rock: 'bg-[var(--color-rock)]',
	fighting: 'bg-[var(--color-fighting)]',
	dark: 'bg-[var(--color-dark)]',
	dragon: 'bg-gradient-to-r from-[#53a4cf] to-[#f16e57]',
	electric: 'bg-[var(--color-electric)]',
	fairy: 'bg-[var(--color-fairy)]',
	shadow: 'bg-[var(--color-shadow)]',
};

const Type = ({type}) => {

    const typeColor = typeColors[type] || 'bg-gray-600';

    return (
        <div className={`h-8 w-24 flex justify-center items-center ${typeColor} rounded-lg shadow-[inset_0px_0px_20px_10px_#00000025] m-0 p-0`}>
            <p className="w-auto h-auto text-center text-white text-lg">{CapitalizeFirstLetter(type)}</p>
        </div>
    )
}

export default Type;