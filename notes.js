const chalk=require("chalk")
const fs=require("fs")
const addNotes=function(title,body)
{
    const notes=loadNotes()
    const duplicateNote=notes.find((note)=>note.title === title)

    

    if (!duplicateNote)
    {
        notes.push({
            title:title,
            body:body
        })
        savenotes(notes)
        console.log(chalk.green.inverse("New note added"))
    }
    else
    {
        console.log(chalk.red.inverse("Note title taken"))
    }
    
}
const removeNote=function(title)
{
    const notes=loadNotes()
    const notesTokeep=notes.filter(function(note)
    {
        
        return note.title!==title
        
    })
    if (notes.length > notesTokeep.length)
    {
        console.log(chalk.green.inverse("Note removed"))
    }
    else
    {
        console.log(chalk.red.inverse("NO Note found"))
    }
    savenotes(notesTokeep)
}
const listNotes=function(title)
{
    const notes=loadNotes()
    console.log(chalk.inverse("Your Notes"))
    notes.forEach((note)=>
    {
        console.log(note.title)
    })
}
const readNote=(title)=>
{
    const notes=loadNotes()
    const note=notes.find((note) =>note.title===title)
    if (note)
    {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.red.inverse("Note not found!"))
    }
}
const savenotes=function(notes)
{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync("notes.json",dataJSON)
}
const loadNotes=function()
{
    try
    {
        const dataBuffer=fs.readFileSync("notes.json")
        const datJSON=dataBuffer.toString()
        return JSON.parse(datJSON)
    }
    catch (e)
    {
        return []
    }
}
module.exports=
{
    addNotes:addNotes,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}