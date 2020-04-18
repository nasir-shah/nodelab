const fetch = require('node-fetch')
console.log('I am in the fetch api')


url = 'http://api.openweathermap.org/data/2.5/weather?id=2172797&units=metric&appid=81e4c997d187d8a7eebaeb16e9be2997'
fetch(url).then((response)=>{
   response.json().then((data)=>{
        console.log(data)
   })
})