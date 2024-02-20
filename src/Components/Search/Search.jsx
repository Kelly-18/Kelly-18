import React from 'react'
import styles from './Search.module.css'

const Search = ({ setSearch, setpageNumber }) => {
  return (

    <form>
      <div className="d-flex justify-content-center mb-5 gap-4">
        <input onChange={(e)=>{
            setpageNumber(1);
            setSearch(e.target.value);
        }} 
        placeholder='Search for characters'  type="text" className={styles.input} />
        
        <button onClick={(e) => {e.preventDefault();
        }}  className={`${styles.btn} btn btn-primary fs-5`}>Search</button>
      </div>
    </form>
  )
}

export default Search
