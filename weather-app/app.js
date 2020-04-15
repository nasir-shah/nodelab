const chalk = require('chalk')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const argv = process.argv

if(argv.length >= 3){
    const location = argv[2]
    geocode(location,(error,{longitude,latitude,place})=>{
        if(error){
            return console.log(error)
        }
        forecast(longitude,latitude,(error,{temperature,feelslike})=>{
            if(error){
                return console.log(error)
            }
            console.log(chalk.green.inverse('It is '+ temperature+ ' degree outside in '+ place + ' and it feels like ' + feelslike + ' degree'))
            })
     })
}else{
    console.log('location is missing')
}

