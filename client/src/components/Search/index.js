import React from "react"
function Search({ keyword, handleInputChange, handleSubmit }){
    return(
        <div className="container text-center">
            <div className="row">
               <div className="col-sm-4">
               <input   className="form-control" value={keyword} onChange={handleInputChange}/>
       
               </div>
               <div className="col-sm-1 text-right"><button onClick={handleSubmit}>Search</button></div>
            </div>
        </div>
    )
}

export default Search