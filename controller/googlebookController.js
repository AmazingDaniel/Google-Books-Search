const axios = require("axios")
 

const googleController ={
    getBooks:function(req, res){
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.title)
            .then(function(results){
                res.json(results.data.items)
            })
    }
}

module.exports = googleController