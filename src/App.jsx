import React, { useState, useEffect } from 'react';


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"
import Filter from "./Components/Filters/Filter";
import Card from "./Components/Cards/Card";
import Pagination from "./Components/Pagination/Pagination"
import Search from './Components/Search/Search';
import Navbar from './Components/Navbar/Navbar';

import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Episodes from './Components/Pages/Episodes';
import Location from './Components/Pages/Location';
import CardDetails from './Components/Cards/CardDetails';

function App(){
  return( 
    <Router>
    <div className="App">
    <Navbar/>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:id' element={<CardDetails/>}/>

      <Route path='/episodes' element={<Episodes/>}/>
      <Route path='/episodes/:id' element={<CardDetails/>}/>

      <Route path='/location' element={<Location/>}/>
      <Route path='/location/:id' element={<CardDetails/>}/>
    </Routes>
  </Router>
  );
  
} 

const Home = ()=>{

  let [pageNumber, setpageNumber] = useState(1);

  
  let [fetchedData, UpdatefetchedData]= useState([]);
  let {info,results}= fetchedData;

  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  
  let api = `https://rickandmortyapi.com/api/character/?page= ${pageNumber}&name= ${search}&status= ${status}&gender= ${gender}&species =${species}`;


  useEffect(()=>{
    (async function(){
      let data = await fetch(api).then((res)=>res.json())
      UpdatefetchedData(data)
    })();

  }, [api])
  return (
    <div className ="App">
  

      

      <h1 className="text-center mb-4">Characters</h1>

      <Search setpageNumber = {setpageNumber}  setSearch = {setSearch}/>

      <div className="container">
        <div className="row">
          
            <Filter setSpecies ={setSpecies}  setGender={setGender}  setStatus= {setStatus} setpageNumber={setpageNumber}/>
          
          <div className="col-lg-8 col-12">
            <div className="row">
                <Card page='/' results = {results}/>
            </div>
            
          </div>
        </div>
      


      </div>
      <Pagination info = {info}  pageNumber = {pageNumber} setpageNumber = {setpageNumber}/>
    </div>
  
  
  );
  
}
export default App