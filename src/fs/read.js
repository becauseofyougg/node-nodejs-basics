import { exists, readFile } from 'fs';

export const read = async () => {
    const errMessage = 'FS operation failed';
    return new Promise((res,rej) => {
        exists('src/fs/files/fileToRead.txt', (exists) => {
            if (exists) {
                readFile(('src/fs/files/fileToRead.txt'), (err,data) => {
                    console.log(data.toString())
                  });
            } else {
              throw errMessage
            }
            res();
          });
    })
};
read();