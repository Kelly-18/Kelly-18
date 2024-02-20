import React, { useState, useEffect } from 'react';


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"
import Filter from "./Components/Filters/Filter";
import Card from "./Components/Cards/Card";
import Pagination from "./Components/Pagination/Pagination"
import Search from './Components/Search/Search';

 

function App(){

  let [pageNumber, setpageNumber] = useState(1);

  
  let [fetchedData, UpdatefetchedData]= useState([]);
  let {info,results}= fetchedData;

  let [search, setSearch] = useState("");

  
  let api = `https://rickandmortyapi.com/api/character/?page= ${pageNumber}&name= ${search}`;


  useEffect(()=>{
    (async function(){
      let data = await fetch(api).then((res)=>res.json())
      UpdatefetchedData(data)
    })();

  }, [api])
  return (
    <div className ="App">
     

      <h2 className ="text-center ubuntu my-5">Rick and Morty <span className="text-primary">API</span> </h2>

      <h1 className="text-center mb-4">Characters</h1>

      <Search setpageNumber = {setpageNumber}  setSearch = {setSearch}/>

      <div className="container">
        <div className="row">
          
            <Filter/>
          
          <div className="col-8">
            <div className="row">
                <Card results = {results}/>
            </div>
            
          </div>
        </div>
      


      </div>
      <Pagination  pageNumber = {pageNumber} setpageNumber = {setpageNumber}/>
    </div>
  
  
  );
  
}
export default App