const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const myname = process.argv
const notes = require('./notes')

yargs.version('1.0.1')

yargs.command({
    command: 'add',
    description: 'This is a note taking app',
    builder:{
        title:{
            description:'this is a title for add a note',
            demandOption: true,
            type: 'string'
        },
        body:{
            description:'this is a body of the note taking app;',
            demandOption: true,
            type: 'string'

        },
    },
    handler:(argv) => notes.addNotes(argv.title, argv.body)
})


yargs.command({
    command: 'remove',
    description: 'This is a to removes the notes',
    builder: {
        title: {
            description: 'This removes the note by its title!',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=> notes.removeNotes(argv.title)
})

yargs.command({
    command: 'list',
    description: 'This is a list',
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    description: 'This is a read notes',
    builder:{
        title: {
        description: 'reading a note',
        demandOption: true,
        type:'string'
        }
    },
    handler(argv) {
        notes.getNotes(argv.title)
    }
})


yargs.parse()
//console.log(yargs.argv)


// if( myname.length >= 3){
//    console.log(myname[2])
// }
//console.log(myname)
// console.log(chalk.blue('Success'))
// console.log(chalk.green.bgRed('Success'))
// //console.log(validator.isEmail('se@dgg.com'))
// console.log(validator.isURL('httpsd.ggom'))
// console.log(chalk.red.bold.underline('hello', 'world','ss'))




//onst add = require('./utils')
// const name = require('./notes.js')
// console.log('I am in app part!')
// const value = add(2,3)
// console.log('The total is shown on the left: '+ value)

// //const name =  
// console.log('My name on the passport is: '+ name())





// // const fs =  require('fs')

// //fs.writeFileSync('notes.txt', 'This is just to add something in the text file!')
// fs.appendFileSync('notes.txt', 'I am appending something to this file!')