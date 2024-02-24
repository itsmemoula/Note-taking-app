const chalk=require("chalk")
const yargs=require("yargs")
const notes=require("./notes.js")

// create add command
yargs.command({
    command:"add",
    describe:"Add a note",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:"string"
        },
        body:{
            describe:"Note Body ",
            demandOption:true,
            type:"string"
        },
    },
    handler:function(argv){
        notes.addNotes(argv.title,argv.body)
    }
})

//remove command
yargs.command({
    command:"remove",
    describe:"remove a note",
    builder:
    {
        title:
        {
            describe:"Note title",
            demandOption:true,
            tyep:"string"
        }
    },
    handler:function(argv){
        notes.removeNote(argv.title)
    }
})
//list command
yargs.command({
    command:"list",
    describe:"list a note",
    handler:function(agv){
        notes.listNotes()
    }
})
//read command
yargs.command({
    command:"read",
    describe:"read a note",
    builder:
    {
        title:
        {
            describe:"Read Notes",
            demandOption:true,
            type:"string"
        }
    },
    handler:function(argv){
        notes.readNote(argv.title)
    }
})
yargs.parse()