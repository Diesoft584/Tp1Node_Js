
import estrellasData from "../../data/estrellas.json"
import { Request, Response } from "express";


export async function createEstrellasController(req:Request, res:Response)  {
    const { id, name, type, distance, mass, radius, temperature, luminosity, age, composition,stellar_history } = req.body;
    
    res.status(200).json({
        status: "OKey",
    });
  }