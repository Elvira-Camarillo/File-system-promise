const fs =require('fs')

const newDir='Carpeta'

function mkdirPromified(newDir) {
    return new Promise((resolve, reject)=>{
        fs.mkdir(newDir,(error)=>{
            if(error){
                reject(error)
                return
            }
            resolve(`El directorio ${newDir} se ha creado`)
        })
    })    
}

async function principal(newDir) {
    const mkdirDir = await mkdirPromified(newDir)
    return mkdirDir    
}

principal(newDir)
    .then(resultado=>{
        console.log('Directorio creado: ',newDir)
    })
    .catch(error=>console.error('ERROR: ',error))