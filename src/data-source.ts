import "dotenv/config" 
import 'reflect-metadata'
import {DataSource} from "typeorm";

const PORT = process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,    
    entities: [
        `${__dirname}/**/entity/*.{ts,js}`
    ],
    migrations: [
        `${__dirname}/**/migrations/*.{ts,js}`
    ]
})

console.log(process.env.DB_USER, process.env.DB_PASS, process.env.DB_NAME, process.env.DB_PORT);

