import {Table} from './game.js';

export class TableManager{
    tables = new Map();
    idSeed=1;

    newTable(){
        var t = new Table();
        this.tables.set(this.idSeed, t);
        this.idSeed++;
        return t;
    }
    getTableById(id){
        return this.tables.get(id);
    }
}
