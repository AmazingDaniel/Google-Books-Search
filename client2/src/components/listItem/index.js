import React from 'react'

function Listitem( { books, handleSave } ) {
    return (
        <>
        {books.length > 0 ? books.map(book => {
            return (
                <div className="card"> 
                <div className="card-body">
                     <div className="row">
                         <div className="col-md-1">
                            <img src={book.volumeInfo ? book.volumeInfo.imageLinks.thumbnail:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1200px-No_image_3x4.svg.png" }/>
                            <p></p>
                         </div>
                         <div className="col-md-11 pl-5">
                             <div className="row">
                                 <div className="col-sm-4"> 
                                 <h3>{book.volumeInfo.title}</h3>
                                <h4>Written by: {book.volumeInfo.authors} </h4>
                                 </div>
                                 <div className="col-sm-8 text-right">
                                     <a href={book.volumeInfo.infoLink} className="btn btn-default">
                                          view
                                     </a>
                                     <button className="ml-2" onClick={() => 
                                    handleSave(book)}>
                                          save
                                     </button>
                                 </div>
                             </div>
                           
                             <p>{book.volumeInfo.description}</p>
                         </div>
                     </div>
                </div>
          </div>
  
            )
        })   : "No Books"}
       
        </>
    )
}

export default Listitem
