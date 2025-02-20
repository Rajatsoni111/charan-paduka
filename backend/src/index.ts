import express from 'express';
import handleAuthentication from './routes/authentication';
import connection from "./connection.js";

const app = express();
const PORT = Number(process.env.PORT) || 8000;
connection();

app.use(express.json());
app.use("/", handleAuthentication);

app.listen(PORT, ()=>console.log(`server started on port: ${PORT}`));