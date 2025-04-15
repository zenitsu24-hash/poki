import React, { useState } from 'react'
import './Poki.css'

const Poki = () => {

    const [search, setSearch] = useState('')
    const [img, setImg] = useState('')
    const [showimg, setShowImg] = useState(false)

    const api = async() => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
        const data = await res.json()
        setImg(data.sprites.front_default)
        setShowImg(true)
    }

  return (
    <>
        <div className='box'>
            <input value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder='Enter Name' className='input'/>
            <button onClick={api} className='button'>fetch pokemon</button>
        </div>
        <div className='box2'>
            {
                showimg && (
                    <img src={img} alt='pokemon' className='img'/>
                )
            }
        </div>
    </>
  )
}

export default Poki
