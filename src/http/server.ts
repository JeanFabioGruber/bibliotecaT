// import express from 'express';
// import { AppDataSource } from '../data-source';
// import routes from "./routes/routes";

// const app = express();
// const port = process.env.PORT || 3000;

// AppDataSource.initialize()
//     .then(() => {
//         console.log('Data Source has been initialized!');
//     })
//     .catch((err) => {
//         console.error('Error during Data Source initialization:', err);
//     });
    

// app.use(express.json());
// app.use("/api/biblioteca", routes);
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });