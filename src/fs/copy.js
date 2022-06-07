import { exists, existsSync,readdirSync,copyFileSync,copyFolderSync } from 'fs';
import {mkdirSync} from 'path';

export const copy = async () => {
    const pathFolder = 'src/fs/files/';
    const pathFolderCopy = 'src/fs/files_copy/';
    // mkdirSync(pathFolderCopy);
    // readdirSync(pathFolder).forEach(el => {
    //     if (lstatSync(path.join(pathFolder, el)).isFile()){
    //         copyFileSync(path.join(pathFolder, el), path.join(pathFolderCopy, el))
    //     } else {
    //         copyFolderSync(path.join(pathFolder, el), path.join(pathFolderCopy, el))
    //     }
    // })

    const errMessage = 'FS operation failed';
    return new Promise((res,rej) => {
        exists(pathFolder, (exists) => {
            if (!exists || existsSync(pathFolderCopy)) {
                throw errMessage;
            } else {
                copyFile(pathFolder, pathFolderCopy)
            }
            res();
          });
    })
};