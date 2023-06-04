// Update with your config settings.

module.exports = {


  development: {
    client: 'mysql',
    connection: {
      host:'sql12.freesqldatabase.com',
      port:3306,
      database: 'sql12623552',
      user: 'sql12623552',
      password: 'bPClLJGzWH'
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

