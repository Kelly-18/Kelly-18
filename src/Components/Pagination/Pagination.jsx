import React from 'react'

const Pagination = ({ pageNumber, setpageNumber }) => {

    let next = ()=> {
        if( pageNumber === 1)return;
        setpageNumber((x)=> x + 1);
    }

    let prev = ()=> {
        setpageNumber((x)=> x - 1);
    }
  return (
    <div className='Container d-flex justify-content-center gap-5 my-5'>
      <button onClick={prev}  className="btn btn-primary">Prev</button>
      <button onClick={next}   className="btn btn-primary">Next</button>
    </div>
  )
}

export default Pagination
