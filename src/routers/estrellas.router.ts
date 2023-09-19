import { Request,Response, Router } from "express";
import estrellasData from "../data/estrellas.json"
import { getEstrellaController } from "../controller/estrellas/getEstrellas.controller";
import { getEstrellasByNameController } from "../controller/estrellas/getEstrellasByName.controller";
import { createEstrellasController } from "../controller/estrellas/createEstrellas.controller";
import { validateEstrellaBody } from "../middlewares/validacionMiddleware";


const router = Router();

//bosepath -----/ estrellas


router.get("/",getEstrellaController )

router.get("/:name", getEstrellasByNameController);

//POST
router.post("/", validateEstrellaBody, createEstrellasController) 

export {
    router
}
