const fs = require('fs')
const chalk = require('chalk')

const notesFileName = 'notes.json'


const add = (title, body) => {
    const notes = load()
    const duplicateNote = notes.find(note => note.title === title)

    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        save(notes)
        console.log(chalk.green('Node is added!'))
    } else {
        console.log(chalk.red('Title is taken!'))
    }
}

const remove = (title) => {
    const notes = load()
    const notesFiltered = notes.filter(note => note.title !== title)

    if(notes.length === notesFiltered.length) {
        console.log(chalk.red('Note not found!'))
    } else {
        console.log(chalk.green('Note removed!'))
    }
    save(notesFiltered)
}

const list = () => {
    const notes = load()
    notes.forEach(note => {
        console.log(note.title)
    });
    save(notes)
}

const read = (title) => {
    const notes = load()
    const note = notes.find(note => note.title === title)
    if(note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red('Note not found!'))
    }

}

const load = () => {
    try {
        const dataBuffer = fs.readFileSync(notesFileName) 
        return JSON.parse(dataBuffer)
    } catch (e) {
        return []
    }
}

const save = (notes) => {
    const dataBuffer = JSON.stringify(notes)
    fs.writeFileSync(notesFileName, dataBuffer)
}



module.exports = {
    add: add,
    remove: remove,
    list: list,
    read: read
}