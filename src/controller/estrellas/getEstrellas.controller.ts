
import estrellasData from "../../data/estrellas.json"
import { Request, Response} from "express";

export async function getEstrellaController(req:Request, res:Response)  {
    const  type  = req.query.type as string;
    let estrellas = estrellasData;
    if (type) {
      estrellas = estrellasData.filter((estrellas) => estrellas.type.includes(type));
    }
    res.status(200).json(estrellas);
  }