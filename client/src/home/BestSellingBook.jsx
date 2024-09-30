import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

function BestSellingBook() {
    const [books, setBooks] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5001/all-books')
        .then(res=>res.json())
        .then(data=>console.log(data))
        //.then(data=>setBooks(data))
        .catch(err=>console.log(err))
    },[])
  return (
    <div>FavouriteBook</div>
  )
}

export default BestSellingBook;