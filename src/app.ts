import express from "express";
import { router as estrellasRouters } from './routers/estrellas.router';


const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/estrellas', estrellasRouters)

app.listen(PORT, () => {
  console.log("Servidor expres iniciado en", PORT);
});