import React, { useState, useEffect } from "react"
import Search from "../components/Search"
import Listitem from "../components/listItem"
import api from "../untils/api"
function Home(props) {
    const [books, setBooks] = useState([])
    const [keyword, setKeyword] = useState("")
    const handleInputChange = event => {
        const { name, value } = event.target
        setKeyword(value)

        console.log(value)
    }
    const handleSubmit = event => {
        api.getGoogleSearchBooks(keyword).then(bookList => {
            setBooks(bookList.data)


        })
    }
    const handleSave = book => {
        const bookData = {
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink
        }
        api.saveBook(bookData).then(results => {
            console.log("book Added", results)
        })
    }
    return (
        <>
            {console.log(books)}
            <Search keyword={keyword} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
            <Listitem books={books} handleSave={handleSave} />
        </>
    )
}

export default Home;