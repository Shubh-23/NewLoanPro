// Update with your config settings.

module.exports = {


  development: {
    client: 'mysql',
    connection: {
      host:'sql7.freesqldatabase.com',
      port:3306,
      database: 'sql7619817',
      user: 'sql7619817',
      password: 'fjv5tHn9Q1'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

};

