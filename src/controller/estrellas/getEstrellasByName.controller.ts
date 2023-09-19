
import estrellasData from "../../data/estrellas.json"
import { Request, Response} from "express";

export async function getEstrellasByNameController(req:Request, res:Response) {
    const name= parseInt(req.params.name);
    const estrellas = estrellasData.find((estrellas) => estrellas.id === name );
    if (!estrellas) {
      res.status(404).json({
        error: "ESTRELLAS_NOT_FOUND",
        message: `estrellas ${name} not found in the database`,
      });
    }
    res.status(200).json(estrellas);
  }