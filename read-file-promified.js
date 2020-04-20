const fs = require('fs')
const fileToRead = 'write4.txt';
const enconding = 'utf8'

function readFilePromified (fileToRead){
    return new Promise((resolve,reject)=>{
        fs.readFile(fileToRead,enconding,(error,data)=>{
            if(error){
                reject(error)
                return
            }
            resolve(data)
        })
    })
}

async function principal(fileToRead){
    const readFile = await readFilePromified(fileToRead)
    return readFile
}

principal(fileToRead)
    .then(resultado=>{
        console.log('fileContent: ',resultado)
        
    })
    .catch(error=>console.error('ERROR: ',error))