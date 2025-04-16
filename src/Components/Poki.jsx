import React, { useEffect, useState } from 'react'
import './Poki.css'
import Card from './Card'

const Poki = () => {

    const [card, setCard] = useState([1,2,3,4,5,6])
    const [search, setSearch] = useState('')
    const [img, setImg] = useState('')
    const [showimg, setShowimg] = useState(false)

    const api = async() => {
        const pokiId = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
        const promises = pokiId.map(async(id) => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await res.json()
            return{
                name: data.name,
                image: data.sprites.front_default
            }
        })

        const results = await Promise.all(promises)
        console.log(results);
        
        setCard(results)    
    }

    const searchapi = async() => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
        const data = await res.json()
        setImg(data.sprites.front_default)
        setShowimg(true)
    }
    
    useEffect(() => {
        api()
    },[])

  return (
    <>
        <div className='box'>
            <input value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder='Enter Name' className='input'/>
            <button onClick={searchapi} className='button'>fetch pokemon</button>
        </div>
        <div className='box2'>
            {
                showimg ? (
                    <img src={img} alt='pokemon' className='img'/>
                ):
                (
                    card.map((item, index) => (
                        <Card key={index} image={item.image} name={item.name}/>
                    ))
                )
            }
        </div>
    </>
  )
}

export default Poki
