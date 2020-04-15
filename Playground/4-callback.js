//console.log('I a printing from the first line')

list = ['andrew','joe','john']

// const name = list.filter((name)=>{
//     //return name.length <= 4 
//     setTimeout(()=>{
//         console.log('cats are cute')
//     },2000)
// })


// const testCallback = (address, callback)=> {
//     setTimeout(()=>{
//         const name = 'here'
//         console.log('hello')
//         callback(name)
//         //return name
//     },2000)
   
// }

// testCallback('hello', (name)=>{
//     console.log('Nasir')
//     console.log(name) 
// })
// console.log('Nasirss')


const callbackTest = (a,b,callback)=>{
    setTimeout(()=>{
            const sum = a+b
            callback(sum)
    },2000)
}

callbackTest(1,2,(sum)=>{
    console.log(sum)
})