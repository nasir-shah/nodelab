const path = require('path')
const express = require('express')
const app = express()

const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))

console.log(publicDirectoryPath)


app.get('/weather',(req,res)=>{
    res.send({
        temperature: 27,
        place : 'Erlangen'
    })
})

app.listen(3000, ()=>{
    console.log('Our app is up and running at port 3000 ::')
})