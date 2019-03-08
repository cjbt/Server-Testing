module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './users/users.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './users/migrations'
    },
    seeds: {
      directory: './users/seeds'
    }
  }
};
