const fs =require('fs')
const deleteFile = 'write.txt'

function unlinkfilepromified(deleteFile) {
    return new Promise((resolve, reject)=>{
        fs.unlink(deleteFile,(error)=>{
            if(error){
                reject(error)
                return
            }
            resolve(`El archivo ${deleteFile} ha sido borrado`)
        })
    })    
}

async function principal(deleteFile){
    const unlinkfile = await unlinkfilepromified(deleteFile)
    return unlinkfile
}

principal(deleteFile)
    .then(resultado=>{
        console.log('fileContent: ',resultado)
    })
    .catch(error=>console.error('ERROR: ',error))