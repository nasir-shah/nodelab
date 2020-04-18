const chalk = require('chalk')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const argv = process.argv

if(argv.length >= 3){
    const location = argv[2]
    geocode(location,(error,response)=>{
        if(error){
            return console.log(error)
        }
        longitude = response.body.features[0].center[0]
        latitude = response.body.features[0].center[1]
        place = response.body.features[0].place_name
        forecast(longitude,latitude,(error,{temp,feels_like})=>{
            if(error){
                return console.log(error)
            }
            console.log(chalk.green.inverse('It is '+ temp+ ' degree outside in '+ place + ' and it feels like ' + feels_like + ' degree'))
            })
     })
}else{
    console.log('location is missing')
}

