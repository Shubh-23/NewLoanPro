
exports.up = function(knex) {
    return knex.schema
    .createTable('songList',table => {
        table.increments('id').primary();
        table.string('songName')
        table.string('artiest')
        table.string('songUrl')
        // table.timestamps(true,true);
    }) 
};

exports.down = function(knex) {
  
};
