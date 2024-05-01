import React from 'react'
import { useParams } from 'react-router-dom'
import usePokemonDetails from '../../hooks/usePokemonDetail'

const DetailPage = () => {
  const { pokemonName } = useParams()
  const { pokemonDetails, loading, error } = usePokemonDetails(pokemonName)

  return (
    <div className='h-full bg-[#252A3E]'>
      Test
    </div>
  )
}

export default DetailPage