import { exists,writeFile } from 'fs';
import path from 'path';  

export const create = async () => {
    const content = "I am fresh and young";
    const errMessage = 'FS operation failed';
    return new Promise((res,rej) => {
        exists('src/fs/files/fresh.txt', (Error) => {
            if (Error) {
              throw errMessage
            } else {
              writeFile(path.resolve('src/fs/files',"fresh.txt"), content, (err) => {
                console.log(err)
              });
            }
            res();
          });
    }
)};