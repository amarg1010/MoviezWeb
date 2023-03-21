import React from 'react'
import "./Pagelist.css"

const Pagelist = ({activePage, setActivePage, totalPage}) => {
    const pageArray = Array(totalPage).fill(0);

  return (
    <>{pageArray.length ? 
        <div className='pagelist'>
          {pageArray.map((e, ind)=>{
            if(ind+1 == activePage){
              return <div key={ind} className='activePage'>{ind+1}</div>
            }
            return <div key={ind} onClick={()=>{setActivePage(ind+1)}}>{ind+1}</div>
          })}
        </div>
      : <></>}
    </>
  )
}

export default Pagelist
