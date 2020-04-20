const fs = require('fs')

const newFile='write4.txt'
const textToAdd='Hola Koders'
const enconding='utf8'

function writeFilePromified(newFile) {
    return new Promise((resolve,reject)=>{
        fs.writeFile(newFile,textToAdd,enconding,(error)=>{
            if(error){
                reject(error)
                return
            }
            resolve(`El archivo ${newFile} ha sido creado`)
        })
    })    
}

async function principal(newFile) {
    const writeFile =await writeFilePromified(newFile)
    return writeFile    
}

principal(newFile)
    .then(resultado=>{
        console.log('writeFile: ',resultado)
    })
    .catch(error=>console.error('ERROR: ',error))
