import React, { useState } from 'react'
import Logo from '../assets/image 29.png'
import Vector from '../assets/Vector.png'
import { useSearchParams } from 'react-router-dom'

const Navbar: React.FC = () => {
    const [searchOpen, setSearchOpen] = useState<boolean>(false)
    const [searchParams, setSearchParams] = useSearchParams()
    
    const searchOnChange = (value: string) => {
        setTimeout(() => {
            setSearchParams({'search': value})
        }, 500)
    }

    return (
        <div className='w-full h-12 bg-[#252A3E] flex items-center px-6 border-b-[1px] border-[#3D4466] absolute'>
            <img src={Logo} alt="" className='w-24 h-9' />
            {
                !searchOpen ? 
                    <button className='w-5 h-5 ml-auto' onClick={() => setSearchOpen(true)}>
                        <img src={Vector} alt="" />
                    </button> :
                    <input className='w-36 h-6 rounded-lg pl-3 ml-auto placeholder:text-sm' placeholder='Search...' onChange={(e) => searchOnChange(e.target.value)} />
            }
        </div>
    )
}

export default Navbar