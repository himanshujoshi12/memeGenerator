import React, { useEffect, useState } from 'react'
import Memecard from '../Components/Memecard';
import { getAllMemes } from '../api/Memes' ;

const Home = () => {
    const [data,setData] =useState([]);


    useEffect(()=>{
        getAllMemes().then(memes => setData(memes.data.memes));
    })
  return (
    <>
    <h1 className="text-center">Meme Generator </h1>
    <div style={{display:'flex',flexDirection:'row','flexWrap':'wrap'}}>
      {
        data.map(item => <Memecard img={item.url} title={item.name} />)
      }
    </div>
    </>
  )
}

export default Home;
