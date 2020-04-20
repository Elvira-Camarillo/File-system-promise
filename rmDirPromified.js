const fs =require('fs')

const dirToDeleted = 'Carpeta1'

function rmDirPromified(dirToDeleted) {
    return new Promise((resolve,reject)=>{
        fs.rmdir(dirToDeleted,(error)=>{
            if(error){
                reject(error)
                return
            }
            resolve(`El directorio: ${dirToDeleted} ha sido eliminada`)
        })
    })
    
}

async function principal(dirToDeleted) {
    const rmDir = await rmDirPromified(dirToDeleted)
    return rmDir   
}

principal(dirToDeleted)
    .then(resultado=>{
        console.log('fileContent: ',resultado)
    })
    .catch(error=>console.error('ERROR: ',error))