import name from './config/json'
import { User, Product } from './models'
import DirWatcher from "./Dirwatcher";
import Importer from "./Importer";
import EventEmitter from 'events'

console.log(name);
new User();
new Product();


let path = './data';
const delay = 3000;

class MyEmitter extends EventEmitter {
}

const emitter = new MyEmitter();

let importer = new Importer(path);
const importCsv = (files) => importer.importCsv(files);
emitter.on('changed', importCsv);

new DirWatcher(path, delay, emitter);