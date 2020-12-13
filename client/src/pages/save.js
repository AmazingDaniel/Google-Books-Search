import React, {useState,useEffect }from "react"
import Listitem from "../components/listItem"

import api from "../untils/api"
function Save(){
    const [books, setBooks] = useState([])
    useEffect(() => {
        api.getBooks().then(booklist => {
            console.log(booklist.data)
            const data= booklist.data.map(book =>  {
              return (

                {
                    volumeInfo:{
                        title: book.title,
                        authors: book.authors,
                        imageLinks: {
                            thumbnail:book.image
                        },
                        infoLink: book.link,
                        description: book.description
                    }
                }
              )
              
              
               
            })
            setBooks(data)
        })
    }, [])
    const handleDelete = event => {

    }

    return(
       <>   
       {console.log(books)}
        <Listitem books={books} handleSave={handleDelete}/> 
       </>
    )
}
export default Save