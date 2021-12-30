import {Table} from './game.js';
import {TableManager} from './tableManager.js';

var manager = new TableManager();

var t = manager.newTable();
console.log(t.players.length);
