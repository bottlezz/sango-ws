const {Table} = require('./game.js');

class TableManager{
    tables = new Map();
    idSeed=1;

    newTable(){
        var table = new Table();
        this.tables.set(this.idSeed, table);
        this.idSeed++;
        return table;
    }
    
    getTableById(id){
        return this.tables.get(id);
    }
}

module.exports ={
    TableManager:TableManager
}