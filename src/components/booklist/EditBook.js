import React, { useRef, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { editBook } from '../api/api'


function EditBook({ bookInfo }) {

    // const navigate = useNavigate()
    let book = {}
    const [errMsg, setErrMsg] = useState('')

    const titleRef = useRef(null)
    const isbnRef = useRef(null)
    const authorRef = useRef(null)
    const descRef = useRef(null)
    const publisherRef = useRef(null)
    const pubDateRef = useRef(null)

    function onEditBookHandler() {
        book = {
            title: titleRef.current.value,
            isbn: isbnRef.current.value,
            author: authorRef.current.value,
            description: descRef.current.value,
            publisher: publisherRef.current.value,
            publishedDate: pubDateRef.current.value,
        }
        const token = (localStorage.getItem('AUTH_TOKEN')).toString()
        editBook(token, book, bookInfo._id)
            .then(res => {
                console.log(res.data)
                window.location.reload()
            })
            .catch(err => {
                console.log(err.response.data.message)
                setErrMsg(err.response.data.message)
            })

    }

    return (
        <div className='booksList'>
            <div className='register'>
                <h1>Edit Book</h1>
                <p>Update Book's Info</p>
                <input
                    ref={titleRef} type='text'
                    placeholder='Title of the book' required />
                <input
                    ref={isbnRef} type='text'
                    placeholder='ISBN' required />
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
                <button onClick={onEditBookHandler}>Update Book</button>
            </div>
        </div>
    )
}

export default EditBook