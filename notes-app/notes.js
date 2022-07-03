const fs=require('fs');
const chalk=require('chalk');



const addNote=(title,body) => {
        const notes=loadNotes();

        const duplicateNotes=notes.filter((note) => {
            return note.title===title
        })

            if(duplicateNotes.length===0){
                notes.push({
                    title:title,
                    body:body
                })
                saveNotes(notes)
                console.log(chalk.green('note added'))
            }
            else {
                console.log(chalk.red('title not valid'))
            } 
}

const saveNotes=(notes) =>  {
        const dataJSON=JSON.stringify(notes)
        fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes=() =>  {
    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString();
        return JSON.parse(dataJSON)
    }catch (e){
        return []
    }
}

const removeNotes=(title) =>  {
    const notes=loadNotes();

    //SIR'S APPROACH
    const noteTitleToBeKept=notes.filter((note) => {
        return note.title!==title
    })
    if(noteTitleToBeKept.length===notes.length){
        console.log(chalk.red('note does not exist'))
    }else {
        saveNotes(noteTitleToBeKept);
        console.log(chalk.green('note removed'))
    }
        

    //MY APROACH
    // let j=-1;
    //     for(let i=0;i<notes.length;i++){
    //         if(notes[i].title===title){
    //             j=i
    //         }
    //     }
    //     if(j===-1){
    //         console.log('note does not exists')
    //     }else {
    //         notes.splice(j,1);
    //     }
    //     saveNotes(notes)
         console.log(noteTitleToBeKept);
}

const listNotes=() => {
    const notes=loadNotes();
    console.log('your notes are ...');
    notes.forEach((note) => {
        console.log(note.title +' ' +note.body)
    })
}

const readNote=((title) =>{
    const notes=loadNotes();
   const findNote= notes.find( (note)=>{
       return note.title===title;
    })
    if(findNote){
        console.log(findNote.title)
        console.log(findNote.body)
    }else{
        console.log('note does not exist');
    }

})

module.exports={
    addNote:addNote,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNote:readNote
}