import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { deleteBook } from '../api/api'
import EditBook from './EditBook'
import '../style.css'

function Book({ bookInfo }) {
    // const navigate = useNavigate()
    const [viewBook, setviewBook] = useState(false)
    const [editBook, setEditBook] = useState(false)

    function onDeleteHandler() {
        const token = (localStorage.getItem('AUTH_TOKEN')).toString()
        deleteBook(token, bookInfo._id)
            .then(res => {
                console.log(res.data)
                window.location.reload()
            })
            .catch(err => {
                console.log(err.response.data.message)
            })
    }

    return (
        <>
            {editBook ? <EditBook bookInfo={bookInfo} /> :
                !viewBook ?
                    <div className='book'
                        onClick={() => setviewBook(true)}
                    >
                        <h2>Book</h2>
                        <h3>{bookInfo.title}</h3>
                        <p>{bookInfo.author}</p>
                        <p>{bookInfo.description}</p>
                    </div>
                    :
                    <div className='viewBook'>
                        <h1>Books Record</h1>
                        <p>View book's info</p>
                        <table className='viewTable'
                            onClick={() => setviewBook(false)}
                        >
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Title</td>
                                    <td>{bookInfo.title}</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Author</td>
                                    <td>{bookInfo.author}</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>ISBN</td>
                                    <td>{bookInfo.isbn}</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Publisher</td>
                                    <td>{bookInfo.publisher}</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Published date</td>
                                    <td>{bookInfo.publishedDate}</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Description</td>
                                    <td>{bookInfo.description}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button onClick={onDeleteHandler}>Delete Book</button>
                        <button onClick={() => setEditBook(true)}>Edit Book</button>
                    </div>
            }
        </>
    )
}

export default Book