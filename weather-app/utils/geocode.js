const request = require('request')

const geocode = (address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2FlZG5hc2lyIiwiYSI6ImNrOHNvOGRxNDBkc3AzbHJzbnFwcG1xN3QifQ.k8h-Bxd1xqofSU7Za3Dcmw&limit=1'
    request({url , json: true},(error,response)=>{
        if(error){
            callback('Unable to connect to the internet!',undefined)
        }else if(!(response.body.features[0])){
            callback('Check with your request!',undefined)
        }else{
            callback(undefined,{
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                place: response.body.features[0].place_name
                
            })

        }

    })
}


module.exports = geocode