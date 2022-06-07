import { exists, unlink } from 'fs';

export const remove = async () => {
    const errMessage = 'FS operation failed';
    return new Promise((res,rej) => {
        exists('src/fs/files/fileToRemove.txt', (exists) => {
            if (exists) {
                unlink(('src/fs/files/fileToRemove.txt'), (err) => {
                    console.log(err)
                  });
            } else {
              throw errMessage
            }
            res();
          });
    })
};