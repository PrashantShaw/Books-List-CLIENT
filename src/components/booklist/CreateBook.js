import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createBook } from '../api/api'


function CreateBook() {

    const navigate = useNavigate()
    let book = {}
    const [errMsg, setErrMsg] = useState('')

    const titleRef = useRef(null)
    const isbnRef = useRef(null)
    const authorRef = useRef(null)
    const descRef = useRef(null)
    const publisherRef = useRef(null)
    const pubDateRef = useRef(null)

    function onCreateBookHandler() {
        book = {
            title: titleRef.current.value,
            isbn: isbnRef.current.value,
            author: authorRef.current.value,
            description: descRef.current.value,
            publisher: publisherRef.current.value,
            publishedDate: pubDateRef.current.value,
        }
        const token = (localStorage.getItem('AUTH_TOKEN')).toString()
        createBook(token, book)
            .then(res => {
                console.log(res.data)
                navigate('/bookslist')
            })
            .catch(err => {
                console.log(err.response.data.message)
                setErrMsg(err.response.data.message)
            })

    }

    return (
        <div className='container'>
            <div className='register'>
                <h1>Add Book</h1>
                <p>Create new book</p>
                <input
                    ref={titleRef} type='text'
                    placeholder='Title of the book' required />
                <input
                    ref={isbnRef} type='text' placeholder='ISBN' required />
                <input
                    ref={authorRef} type='text'
                    placeholder='Author' required />
                <input
                    ref={descRef} type='text'
                    placeholder='Describe this book' required />
                <input
                    ref={pubDateRef} type='text'
                    placeholder='Published date' required />
                <input
                    ref={publisherRef} type='text'
                    placeholder='Publisher of this book' required />
                {errMsg ? <p>{errMsg}</p> : null}
                <button onClick={onCreateBookHandler}>Submit</button>
            </div>
        </div>
    )
}

export default CreateBook