var Request = require("request")
var url = require('url')
const express = require('express')
var cors = require('cors');
const app = express()

app.get('/api', cors(), (req, response) => {

    var params = req.query
    if (params.lat && params.lon){
        var lat = params.lat
        var lon = params.lon        
        var urlparam = lat + "," + lon
    
        Request.get("https://api.darksky.net/forecast/fd426e7cd961bafdb8c00cb8e06084bd/" + urlparam, (error, res, body) => {
            if(error) {
                response.send(error)
            }
            response.send(body)        
        });
    }else{
        response.send("Failed Parameters")                
    }

})


app.listen(8000, () => {
    console.log('Server is up on 8000')
})