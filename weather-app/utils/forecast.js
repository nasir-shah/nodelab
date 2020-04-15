const request = require('request')
const forecast = (long,lat,callback)=>{

    const url = 'http://api.weatherstack.com/current?access_key=52c6481d6c7c968b00f97edc222ed966&query='+lat+','+ long
    request({url:url ,json:true},(error, response)=>{
        if(error){
            callback('Unable to connect to the internet!',undefined)
        }else if(!(response.body.current)){
            callback(response.body.error.info,undefined)
        }else{
            callback(undefined,response.body.current)
        }
    })
}

module.exports = forecast