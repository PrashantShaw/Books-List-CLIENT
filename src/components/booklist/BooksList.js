import React, { useEffect, useState } from 'react'
import { getBooksList } from '../api/api'
import { useNavigate } from 'react-router-dom'
import Book from './Book'
import '../style.css'

function BooksList() {

    const [booksList, setBooksList] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const token = (localStorage.getItem('AUTH_TOKEN')).toString()
        console.log('::', token)

        getBooksList(token)
            .then((result) => {
                console.log(result.data.bookList)
                setBooksList(result.data.bookList)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])


    return (
        <div className='container-II'>
            <div className='booksList'>
            <h1>Books List</h1>
            <button onClick={()=>navigate('/createbook')}>+ Add New Book</button>
            <div className='books-container'>
                {!booksList.length ? 
                <p>No books added</p>
                :
                booksList.map((bookInfo,idx)=>{
                    return <Book bookInfo={bookInfo} key={idx} />
                })}
            </div>
            </div>
        </div>
    )
}

export default BooksList