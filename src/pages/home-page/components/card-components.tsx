import React from 'react'
import usePokemonDetails from '../../../hooks/usePokemonDetail'
import { useNavigate } from 'react-router-dom'

interface CardProps {
    name: string
    url: string
}

const Card: React.FC<CardProps> = ({ name, url }) => {
    const navigate = useNavigate()
    const { pokemonDetails, loading, error } = usePokemonDetails(name)
    console.log(pokemonDetails);
    
    return (
        <div className='w-32 h-44 bg-white mb-4 flex flex-col items-center justify-center gap-2 rounded-lg pt-5'
        onClick={() => navigate(`/${name}`)}
        >
            <img src={pokemonDetails?.artworkFront} alt={name} className='w-24 h-24 relative'/>
            <p className='font-dm-sans text-sm font-bold capitalize'>{ name }</p>
        </div>
    )
}

export default Card