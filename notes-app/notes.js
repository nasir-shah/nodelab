const fs =  require('fs')
const chalk = require('chalk')

const getNotes = (title) => {
    const notes = loadNotes()
    const myNote = notes.find((note)=> note.title ===title)
    if(myNote){
        console.log(chalk.blue.inverse('My Note is shown below::'))
        console.log(chalk.green.inverse(myNote.title))
        console.log(chalk.yellow.inverse(myNote.body))
    } else{
        console.log(chalk.red.inverse(' Note not found!'))
    }
}

const addNotes = (title,body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note)=>{
       return note.title == title
    })
    debugger
    if(duplicateNotes.length == 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('Note saved sucessfully!'))
    }else{
        console.log(chalk.red.inverse('This title already exists!'))
    }
    
}

const saveNotes = (notes) => {
        const dataJson = JSON.stringify(notes)
        fs.writeFileSync('notes.json',dataJson)
}


const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)

    }catch(e){
        return []
    }
}

const removeNotes = (title) => {
    const notes = loadNotes()
    const remove =  notes.filter((note) => {
        return note.title === title
    })
    if(remove.length >0 ){
        for(var i =0; i< notes.length;i++){
            if (remove[0].title == notes[i].title){
                notes.splice(i,1)
                saveNotes(notes)
                console.log(chalk.green.inverse('Note removed sucessfully!'))
                break
            } 
        }
    }else{
        console.log(chalk.red.inverse('Note doesn\'t exists!'))
    }
}

const listNotes = ()=> {
    const notes = loadNotes()
    console.log(chalk.blue.inverse('My notes are listed below!'))
    notes.forEach(note => console.log(chalk.green.bold(note.title)));
}

module.exports = {
    getNotes : getNotes,
    addNotes : addNotes,
    loadNotes : loadNotes,
    removeNotes: removeNotes,
    listNotes: listNotes
}