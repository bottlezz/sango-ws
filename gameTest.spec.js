//import {Table} from './game.js';
const {TableManager} = require('./tableManager.js');
const { expect, it } = require('@jest/globals');

it('new table should have 8 seats', ()=>{
    var manager = new TableManager();
    var t = manager.newTable();
    expect(t.seats.length).toEqual(8);
})