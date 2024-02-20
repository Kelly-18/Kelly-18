import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const cardDetails = () => {
    let {id} = useParams();
    let [fetchedData, UpdatefetchedData]= useState([]);

    let api = `https://rickandmortyapi.com/api/character/${id}`;

    useEffect(()=>{
        (async function(){
          let data = await fetch(api).then((res)=>res.json())
          UpdatefetchedData(data)
        })();
    
      }, [api]);

    
  return (
   
    <div>
      The details of the card are here - {id}
    </div>
  )
}

export default cardDetails
