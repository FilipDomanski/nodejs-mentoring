import csv from 'csvtojson'

class Importer {

    constructor(path) {
        this.path = path;
    }

    importCsv(files) {
        for (let i in files) {
            this.import(files[i]);
        }
    }

    import(file) {
        csv()
            .fromFile(this.path + '/' + file)
            .on('json', (jsonObj) => {
                console.log(jsonObj);
            })
    }
}

export default Importer