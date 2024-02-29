import React from 'react'
import FilterBTN from '../FilterBTN';

const Gender = ({ setGender, setpageNumber }) => {

  let genders = ['Male', 'Female', 'Genderless', 'Unknown'];

  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Gender
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-3">
          {genders.map((items, index) => 
          (<FilterBTN 
            task = {setGender} 
            setpageNumber={setpageNumber}
            key={items} 
          name='gender'
          index={index} 
          items={items}/>))}
        </div>
    </div>
  </div>
  );
}

export default Gender
