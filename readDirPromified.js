const fs = require('fs')

const nameDir ='Carpeta'

function readDirPromified(nameDir) {
    return new Promise((resolve,reject)=>{
        fs.readdir(nameDir,(error,file)=>{
            if(error){
                reject(error)
                return
            }
            resolve(`Esta carpeta contiene: ${file}`)
        })
    })    
}

async function principal(nameDir) {
    const readDir = await readDirPromified(nameDir)
    return readDir    
}


principal(nameDir)
    .then(resultado=>{
        console.log(resultado)
    })
    .catch(error=>console.error('ERROR: ',error))