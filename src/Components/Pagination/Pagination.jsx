import React, {useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ info, pageNumber, setpageNumber }) => {

  let [width, setWidth] = useState(window.innerWidth);

  let updateDimension = ()=> {
    setWidth(window.innerWidth);
    
  }

  useEffect(()=> {
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    }
  },[])

    return (

      <div>

      <>
      <style jsx>
          {`
          @media(max-width: 768px){
            .prev, .next{
              display: none;
            }
          }
          .pagination{
            font-size: 14px;
          }
          `}
      </style>

      <ReactPaginate className='pagination justify-content-center gap-4 my-4' 
      nextLabel='Next'
      previousLabel='Prev'
      previousClassName='btn btn-primary prev'
      nextClassName='btn btn-primary next'
      pageClassName='page-item'
      pageLinkClassName='page-link'
      forcePage={ pageNumber === 1? 0 : pageNumber -1}
      activeClassName='active'
      marginPagesDisplayed={width < 576? 1 : 3}
      pageRangeDisplayed={width < 576? 1 : 3}
      onPageChange={(data) => {
        setpageNumber(data.selected + 1);
      }}
       pageCount={info?.pages}/>

</>
</div>
    )
    
    
}

export default Pagination
