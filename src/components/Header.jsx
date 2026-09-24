import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex justify-between items-center py-6 px-[5%] bg-black'>
        <h1 className='logo p-2 text-[2rem] font-bold text-white cursor-pointer transition-all hover:text-gray-300'>Loja 
            <span className='text-[#3cff00]'>Gamer</span></h1>
        <nav className='header-btns'>
            <ul className='flex list-none items-center gap-8 text-white'>
                <li className='text-white text-lg no-underline hover:text-[#3cff00] transition-all'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='text-white text-lg no-underline hover:text-[#3cff00] transition-all'>
                    <Link to='/jogos'>Jogos</Link>
                </li>
                <li className='text-white text-lg no-underline hover:text-[#3cff00] transition-all'>
                    <Link to='/Contato'>Contato</Link>
                </li>
                <li className='text-white text-lg no-underline hover:text-[#3cff00] transition-all'>
                    <Link to='/login'>Login</Link>
                </li>
            </ul>
        </nav>      
    </header>
  )
}

export default Header
