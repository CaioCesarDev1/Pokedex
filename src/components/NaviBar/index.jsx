import React from "react";
import Pokedex from '../../assets/img/pokedex_logo.png';
import useCustomNavigate from '../../hooks/useCustomNavigate';

const NaviBar = () => {
    const handleNavigate = useCustomNavigate();

    const handleClick = () => {
        handleNavigate('');
    };

    return (

        <nav className='shadow-xl h-20 backdrop-blur-md bg-gray-600/15 flex justify-center items-center'>
            <div className=''>
                <img onClick={handleClick} className='h-14 cursor-pointer' src={Pokedex} alt="Pokedex" />
            </div>
        </nav>
    )
}

export default NaviBar