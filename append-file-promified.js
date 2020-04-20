const fs = require('fs')
const fileName = 'write4.txt'
const encoding = 'utf8'
const textToAdd = '\nRegistro de koder'

function appendFilePromified(fileName){
    return new Promise ((resolve, reject)=>{
        fs.appendFile(fileName,textToAdd,encoding,(error)=>{
            if(error){
                reject(error)
                return
            }
            resolve(textToAdd)
        })
    })    
}

async function principal(fileName){
    const appendFile = await appendFilePromified(fileName)
    return appendFile
}

principal(fileName)
    .then(resultado=>{
        console.log('fileContent: ',resultado)
    })
    .catch(error=>console.error('ERROR: ',error))


