import axios from "axios";

// const baseURL = 'http://localhost:8081'
const baseURL = 'https://books-list-server-side.onrender.com'

export const registerUser = (user) => axios.post(`${baseURL}/user/register`, user)

export const loginUser = (user) => axios.post(`${baseURL}/user/login`, user)

export const getBooksList = (auth_token) => {
    return axios({
        method: 'get',
        url: `${baseURL}/booklist`,
        headers: { Authorization: auth_token }
    })
}

export const createBook = (auth_token, book_info) => {
    return axios({
        method: 'post',
        url: `${baseURL}/booklist`,
        headers: { Authorization: auth_token },
        data: { ...book_info }
    })
}

export const deleteBook = (auth_token, id) => {
    return axios({
        method: 'delete',
        url: `${baseURL}/booklist/${id}`,
        headers: { Authorization: auth_token },
    })
}

export const editBook = (auth_token, book_info, id) => {
    return axios({
        method: 'put',
        url: `${baseURL}/booklist/${id}`,
        headers: { Authorization: auth_token },
        data: { ...book_info }
    })
}