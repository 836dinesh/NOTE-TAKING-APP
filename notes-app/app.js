const yargs=require('yargs');
 const  notes=require('./notes.js'); 

 //custmoise yargs version
 yargs.version('1.1.0');

// const commond=process.argv[2];

// if(commond==='add'){
//     console.log('note added...')
// }
// console.log(process.argv)


yargs.command({
    command: 'add',
    describe: 'add anew note ',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'note body',
            demandOption:false,
            type:'string'
        }
    },
    handler(argv){
       notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'remove new note ',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title);
    }
})
yargs.command({
    command: 'list',
    describe:'list a note',
    handler() {
        notes.listNotes();
    }
})
yargs.command({
    command:'read',
    describe:'reading new note ',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})
yargs.parse();
// console.log(yargs.argv)







