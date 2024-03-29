import React from 'react'
import Gender from './Category/Gender'
import Status from './Category/Status'
import Species from './Category/Species'

const Filter = ({ setStatus, setpageNumber, setGender, setSpecies }) => {

    let clear = ()=>{
      setStatus("");
      setpageNumber(""),
      setGender("");
       setSpecies("");
       window.location.reload(false);
    }

  return (
    <div className='col-lg-3 col-12 mb-5'>
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div  onClick={clear}  style={{cursor: "pointer"}} className="text-center text-primary text-decoration-underline mb-4">Clear Filters</div>

      <div className="accordion" id="accordionExample">
        
        <Status setStatus= {setStatus} setpageNumber={setpageNumber}/>
        <Species setSpecies={setSpecies} setpageNumber={setpageNumber}/>
        <Gender setGender={setGender} setpageNumber={setpageNumber}/>
      </div>

    </div>
  )
}

export default Filter
