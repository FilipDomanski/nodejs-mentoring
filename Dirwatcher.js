import fs from 'fs';

class DirWatcher {

    constructor(path, delay, emitter) {
        watch(path, delay, emitter);
    }
}

function watch(path, delay, emitter) {
    let counter;
    setInterval(() => {
        fs.readdir(path, (err, files) => {
            let numberOfFiles = files.length;
            if (counter === undefined || counter !== numberOfFiles) {
                counter = numberOfFiles;
                emitter.emit('changed', files);
            }
        })
    }, delay);
}

export default DirWatcher