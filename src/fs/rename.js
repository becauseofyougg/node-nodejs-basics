import { exists, renameSync,existsSync } from 'fs';

export const rename = async () => {        
    const pathFolder = 'src/fs/files/';
    const fileToRename = 'wrongFilename.txt'
    const renamedFile = 'properFilename.md'
    const errMessage = 'FS operation failed';
    return new Promise((res,rej) => {
        exists(pathFolder, (exists) => {
            if (!exists || existsSync(pathFolder + renamedFile)) {
                throw errMessage;
            } else {
                renameSync(pathFolder + fileToRename, pathFolder + renamedFile)
            }
            res();
          });
    })
};