const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit',(e)=>{
      e.preventDefault()

      const location = search.value
      
      messageOne.textContent = 'Loading...'
      messageTwo.textContent = ''

      url = '/weather?address=' + location
      fetch(url).then((response)=>{
         response.json().then((data)=>{
               if (data.error){
                  messageOne.textContent = data.error
               }else{
                  messageOne.textContent = data.place
                  messageTwo.textContent = 'The temperature in ' + data.place + ' is ' + data.temperature + ' degree and it feels like ' + data.feels_like + ' degree'
               }
         })
      })
})

