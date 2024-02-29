import React from 'react'
import FilterBTN from '../FilterBTN';

const Species = ({ setpageNumber, setSpecies }) => {

  let species = ['Human','Alien', 'Humanoid',
  'Poopybuthole',
  'Mythological', 
  'Uknown',
   'Animal',
   'Disese',
   'Robot',
  'Cronenberg',
  'Planet'];


  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Species
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-3">
          {species.map((items, index) => 
          (<FilterBTN 
            task={setSpecies}
            setpageNumber={setpageNumber}
          key={items} 
          name='species' 
          index={index} 
          items={items}/>))}
         </div>
    </div>
  </div>
  );
}

export default Species
