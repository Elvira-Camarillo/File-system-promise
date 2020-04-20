const fs =require('fs')
const fileToCopy ='write4.txt'
const copyFile='write.txt'
const encoding ='utf8'


function copyFilePromified(fileToCopy) {
    return new Promise((resolve,reject)=>{
        fs.copyFile(fileToCopy,copyFile,encoding,(error)=>{
            if(error){
                reject(error)
                return
            }
            resolve(`El archivo ${fileToCopy} ha sido copiado en ${copyFile}`)
        })
    })   
}

async function principal(fileToCopy){
    const copyFile = await copyFilePromified(fileToCopy)
    return copyFile
}

principal(fileToCopy)
    .then(resultado=>{
        console.log('fileContent: ',resultado)
        
    })
    .catch(error=>console.error('ERROR: ',error))