import express from 'express';
import "reflect-metadata"
import AppDataSource from '../dataSource/DataSource ';

const app = express();
const port = 3000;

AppDataSource.initialize();
    

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});