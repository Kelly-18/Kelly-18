import React from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom';

const Card = ( { results, page }) => {
    
    let display;
    console.log(results);

    if(results){
        display = results.map((x)=>{
            let {id, name, image,location, status} = x
            return ( 
            <Link 
            style={{textDecoration: 'none'}}
                to={`${page}${id}`}
             key={id} className='col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark'>
                <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
                    <img src={image} alt="" className={`${styles.img} img-fluid`} />
                    <div  style={{ Padding : "20px" }} className="Content">
                        <div className="fs-4 fw-bold mb-4">{name}</div>
                        <div className="">
                            <div className="fs-6">Last location</div>
                            <div className="fs-5">{location.name}</div>
                        </div>
                    </div>
                </div>
                {(()=>{
                    if(status === "Alive"){
                        return(
                            <div className= {`${ styles.badge } position-absolute  badge bg-success`}>{status}</div> 
                        )
                    }
                    else if(status === "Dead"){
                        return(
                            <div className= {`${ styles.badge } position-absolute  badge bg-danger`}>{status}</div>
                        )
                    }
                    else{
                        return(
                            <div className= {`${ styles.badge } position-absolute  badge bg-secondary`}>{status}</div>
                        )
                    }
                })()}
               
            </Link>)
        });
    }else{
        display = 'No characters Found :/';
    }
  return (
    <>
      {display}
    </>
  )
}

export default Card
