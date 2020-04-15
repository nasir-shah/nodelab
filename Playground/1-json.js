const fs = require('fs')

const fileData = fs.readFileSync('1-json.json')
console.log(fileData.toString())
const parseData = JSON.parse(fileData)
parseData.Name = "Amjid"
fs.writeFileSync('1-json.json', JSON.stringify(parseData))
//console.log(parseData.Na)


// const book = {author : 'Nasir Fareed Shah', Title: 'Smoking Kills'}


// const jsonData = JSON.stringify(book)
// console.log(book)
// console.log(jsonData)
// const jsonBack =  JSON.parse(jsonData)
// console.log(jsonBack)

// fs.writeFileSync('1-json.json',jsonData)

