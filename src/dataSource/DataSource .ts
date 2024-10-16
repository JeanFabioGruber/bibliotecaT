import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
    type: 'mysql', // or 'mysql', 'sqlite', etc.
    host: 'localhost',
    port: 3306, // default port for PostgreSQL
    username: 'root',
    password: 'root',
    database: 'biblioteca',
    synchronize: true, // set to false in production
    logging: false,
    entities: [], // add your entities here
    migrations: [],
    subscribers: [],
});

AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((err) => {
        console.error('Error during Data Source initialization:', err);
    });

export default AppDataSource;