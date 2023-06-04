const bookshelf = require('../database/db');


const songList = bookshelf.model('songList',{
    tableName:'songList',
    idAttribute:"id",
})

module.exports = songList

